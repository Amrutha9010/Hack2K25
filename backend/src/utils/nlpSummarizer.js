export const summarizeText = (text, numSentences = 7) => {
  if (!text) return "";

  // 1. Clean and tokenize text into sentences
  // Improved regex to handle common abbreviations like "Dr.", "Mr." better if possible, 
  // but for now standard sentence splitting is okay.
  // We remove excessive newlines/spaces first.
  const cleanText = text.replace(/\s+/g, " ");
  const sentences = cleanText.match(/[^\.!\?]+[\.!\?]+/g) || [cleanText];
  
  if (sentences.length <= numSentences) {
    return sentences.map(s => "• " + s.trim()).join("\n");
  }

  // 2. Tokenize words and calculate frequency
  const wordFrequency = {};
  const stopWords = ["the", "is", "in", "and", "to", "of", "a", "for", "with", "on", "at", "by", "from", "up", "about", "into", "over", "after", "this", "that", "it", "be", "are", "was", "were"];
  // Key medical terms to boost importance
  const keyTerms = ["diagnosis", "conclusion", "impression", "result", "finding", "abnormal", "positive", "negative", "detected", "suggestive"];

  const words = cleanText.toLowerCase().split(/\W+/);
  
  words.forEach(word => {
    if (word && !stopWords.includes(word) && !/^\d+$/.test(word)) {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    }
  });

  // 3. Score sentences
  const sentenceScores = sentences.map((sentence, index) => {
    let score = 0;
    const lowerSentence = sentence.toLowerCase();
    const sentenceWords = lowerSentence.split(/\W+/);
    
    sentenceWords.forEach(word => {
      // Base frequency score
      if (wordFrequency[word]) {
        score += wordFrequency[word];
      }
    });

    // Keyword Boost
    keyTerms.forEach(term => {
      if (lowerSentence.includes(term)) {
        score += 10; // Significant boost for headers/key findings
      }
    });

    // Normalized by length to avoid bias towards long sentences
    // But punishment for very short sentences (likely noise)
    if (sentenceWords.length < 4) score = 0; 

    return { 
      sentence, 
      score: score / (sentenceWords.length || 1), 
      index 
    };
  });

  // 4. Sort by score and pick top N
  const topSentences = sentenceScores
    .sort((a, b) => b.score - a.score)
    .slice(0, numSentences)
    .sort((a, b) => a.index - b.index); // Reorder by appearance

  // Format as bullet points
  return topSentences.map(s => "• " + s.sentence.trim()).join("\n");
};
