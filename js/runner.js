function runUserCode(userCode, functionName, testCases) {
  try {
    const userFunction = new Function(
      userCode + `; return ${functionName};`
    )();

    let results = [];
    let passed = 0;

    for (let i = 0; i < testCases.length; i++) {
      const test = testCases[i];

      const received = userFunction(...test.input);

      const isCorrect =
        JSON.stringify(received) ===
        JSON.stringify(test.expectedOutput);

      if (isCorrect) passed++;

      results.push({
        index: i + 1,
        input: test.input,
        expected: test.expectedOutput,
        received: received,
        status: isCorrect ? "Passed" : "Failed"
      });
    }

    return {
      status: passed === testCases.length ? "Accepted" : "Wrong Answer",
      passed,
      total: testCases.length,
      results
    };

  } catch (err) {
    return {
      status: "Runtime Error",
      error: err.message
    };
  }
}
