import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ExportChart = ({ moodDistributionRef, moodTimeLineRef, stressMeterRef, energyLevelRef }) => {

  const drawChartWithAspectRatio = (img, x, y, maxWidth, maxHeight, title, pdf) => {
  if (!img) return;

  const imageObj = new Image();
  imageObj.src = img;

  imageObj.onload = () => {
    const naturalWidth = imageObj.width;
    const naturalHeight = imageObj.height;

    const aspectRatio = naturalWidth / naturalHeight;

    let drawWidth = maxWidth;
    let drawHeight = maxHeight;

    if (drawWidth / drawHeight > aspectRatio) {
      drawWidth = drawHeight * aspectRatio;
    } else {
      drawHeight = drawWidth / aspectRatio;
    }

    pdf.setFontSize(14);
    pdf.text(title, x + maxWidth / 2, y + 10, { align: "center" });

    const offsetX = x + (maxWidth - drawWidth) / 2;
    const offsetY = y + 15 + (maxHeight - drawHeight - 15) / 2; // leave space for title
    pdf.addImage(img, "PNG", offsetX, offsetY, drawWidth, drawHeight);
  };
};


const handleExports = async () => {
  const pdf = new jsPDF("l", "mm", "a4");

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const moodDistributionImg = moodDistributionRef?.current?.toBase64Image();
  const moodTimeLineImg = moodTimeLineRef?.current?.toBase64Image();
  const energyLevelImg = energyLevelRef?.current?.toBase64Image();
  const stressCanvas = await html2canvas(stressMeterRef.current);
  const stressMeterImg = stressCanvas.toDataURL("image/png");

  const margin = 15;
  const spacing = 15;
  const chartWidth = (pageWidth - 3 * margin) / 2;
  const chartHeight = (pageHeight - 3 * margin) / 2;

  const charts = [
    { img: moodDistributionImg, title: "Mood Distribution" },
    { img: moodTimeLineImg, title: "Mood Timeline" },
    { img: energyLevelImg, title: "Energy Level" },
    { img: stressMeterImg, title: "Stress Meter" },
  ];

  charts.forEach((chart, index) => {
    const row = Math.floor(index / 2);
    const col = index % 2;

    const x = margin + col * (chartWidth + spacing);
    const y = margin + row * (chartHeight + spacing);

    drawChartWithAspectRatio(chart.img, x, y, chartWidth, chartHeight, chart.title, pdf);
  });
  setTimeout(() => {
    pdf.save("user_Graph.pdf");
  }, 500);
};

  return (
    <div>
      <button
      onClick={handleExports}
        className="bg-white h-10 w-30 rounded-md border-2 border-gray-200 text-gray-700 font-medium hover:bg-gray-200 hover:cursor-pointer transition-transform duration-200 transform hover:scale-110 flex justify-center items-center">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download">
          <path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg></span><span className='pl-1'>Export</span></button>
    </div>
  )
}

export default ExportChart;