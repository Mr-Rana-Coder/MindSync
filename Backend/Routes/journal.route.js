import express from 'express';
import { apiVerification } from '../Middlewares/authentication.middleware';
import { chartData, journalAnalysis, journalHistory, exportJournalPDF } from '../Controllers/journal.controller';

const router = express.Router();
router.use(apiVerification);

router.route("/chartData/:type").get(chartData);
router.route("/journal-analysis").post(journalAnalysis);
router.route("/journal-history/:page/:limit").get(journalHistory);
router.route("/export-PDF").get(exportJournalPDF);//Needs to be complete

export {
    router
}