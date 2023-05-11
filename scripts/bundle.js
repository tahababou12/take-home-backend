
let sh = require('child_process').execSync;
let author = sh('git config --get user.email').toString().trim();
let commits = sh(`git log --author=${ author }`).toString().trim();

if (!commits) {
  console.error('This repo has no commits from the current Git user. Did you commit your changes?');
  process.exit(1);
}

let result = sh('git bundle create local-take-home.bundle HEAD master');
console.log('Nice work, you created local-take-home.bundle.');
console.log('Please email it to taha@beloc.al')
