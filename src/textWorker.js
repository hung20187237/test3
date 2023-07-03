
const workercode = () => {
  onmessage = (event) => {
    const text = event.data;
    const specialCharactersRegex = /[.,\s]/g;
    const words = text
      .replace(specialCharactersRegex, " ")
      .toLowerCase()
      .split(" ")
      .filter((word) => word !== "");
    const uniqueWords = [...new Set(words)];
    const wordCountMap = {};

    words.forEach((word) => {
      if (wordCountMap[word]) {
        wordCountMap[word]++;
      } else {
        wordCountMap[word] = 1;
      }
    });

    const sortedWords = Object.keys(wordCountMap).sort(
      (a, b) => wordCountMap[b] - wordCountMap[a]
    );
    const topRepeatedWords = sortedWords
      .slice(0, 3)
      .map((word) => ({ word, count: wordCountMap[word] }));
      postMessage({ uniqueWords, topRepeatedWords });
  };
};

let code = workercode.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));

const blob = new Blob([code], { type: "application/javascript" });
const worker_script = URL.createObjectURL(blob);

module.exports = worker_script;
