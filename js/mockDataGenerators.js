// Basic mockDataGenerators.js with minimal functions
function generateMockExamPaper(topicCategory) { return { set: "HKDSE 2024 Set 1", instructions: "PART A Group Interaction", textType: "Article", text: "Sample text", discussionTopic: "Sample topic", discussionPoints: ["point 1", "point 2", "anything else"] }; }
function generateSampleNotes(examPaper) { return "NOTES FOR DISCUSSION

Sample notes"; }
function generateSampleScript(examPaper, notecard) { return "GROUP INTERACTION SCRIPT

Sample script"; }
function formatExamPaperForDownload(examPaper) { return JSON.stringify(examPaper, null, 2); }
function getRandomBulletPoint(point, text) { return "Sample bullet"; } function getRandomVocabulary() { return "Sample vocabulary"; } function generateScriptParagraph(point, notecard) { return "Sample paragraph"; }
function simulateTranscript(script) { return script || ""; } function generateFeedback() { return { overall: "Good effort!", pronunciation: { rating: 3, comment: "Good" }, vocabulary: { rating: 3, comment: "Good" }, communication: { rating: 3, comment: "Good" }, ideas: { rating: 3, comment: "Good" } }; }
function getPronunciationFeedback() { return "Feedback"; } function getVocabularyFeedback() { return "Feedback"; } function getCommunicationFeedback() { return "Feedback"; } function getIdeasFeedback() { return "Feedback"; } function downloadTextFile(content, filename) { console.log("Download", filename); }
