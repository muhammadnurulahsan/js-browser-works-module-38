// Browser হল এক ধরনের desktop software যা PC তে install করে ব্যবহার করতে হয়। কোনাে একটি browser
// static website দেখানোর steps: 

// Browser আমাদের html file টা কে একটা tree তে পরিবর্তন করে যা DOM tree হিসেবে পরিচিত। 

// html file এর উপর style দেওয়ার জন্য browser একটা style tree তৈরী করে। 

// DOM tree এবং style tree মিলে তৈরী হয় render tree যা website এর layout কে নির্দেশ করে। Dom tree/render tree তে কোনাে কিছু update হলে সেই অনুযায়ী। re-rendering হয়। 

// Render tree পাওয়ার পর সেটার উপর paint করা হয়। Re-render হলে re-paint (reflow) হয়। 

// সবশেষে User Interface (UI) এ output টা display হয়।
