<h1>
  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bts-logo-VzG76muLZBrru9cUAq2rTa3L5UueRC.svg" alt="Bengali Text Summarizer Logo" width="40" style="vertical-align: middle; margin-right: 10px;">
  Bengali Text Summarizer
</h1>


<h2>📚 Table of Contents</h2>
<ul>
    <li><a href="#overview">🔍 Overview</a></li>
    <ul>
        <li><a href="#key-components">🌐 Key Components</a></li>
    </ul>
    <li><a href="#problem-statement">🎯 Problem Statement</a></li>
    <li><a href="#features">✨ Features</a></li>
    <li><a href="#model-architecture">🧠 Model Architecture</a></li>
    <ul>
        <li><a href="#dataset-statistics">📊 Dataset Statistics</a></li>
        <li><a href="#model-code-snippet">💻 Model Code Snippet</a></li>
        <li><a href="#training-results">📈 Training Results</a></li>
    </ul>
    <li><a href="#tech-stack">🛠 Tech Stack</a></li>
    <ul>
        <li><a href="#model-tech-stack">Model Tech Stack</a></li>
        <li><a href="#website-tech-stack">Website Tech Stack</a></li>
    </ul>
    <li><a href="#project-structure">📁 Project Structure</a></li>
    <li><a href="#installation">🚀 Installation</a></li>
    <li><a href="#usage">🖥 Usage</a></li>
    <li><a href="#license">📄 License</a></li>
</ul>

<br>

<h2 id="overview">🔍 Project Overview</h2>
<p>Bengali Text Summarizer is a web application developed as part of the CSE499B Senior Design Project II for the B.Sc. final year project. It allows users to input Bengali news articles and generate concise summaries, addressing the challenge of navigating through vast amounts of Bengali news content efficiently.</p>

<h3 id="key-components">🌐 Key Components</h3>
<ol>
    <li><strong>Web Crawler</strong>: Initially developed to fetch articles from various Bengali newspaper portals.</li>
    <li><strong>Data Collection</strong>: Gathered articles and summaries from multiple sources.</li>
    <li><strong>Model Training</strong>: Utilized a pre-trained model (google/mt5-small) with a Seq2Seq architecture.</li>
    <li><strong>Web Interface</strong>: Built using Next.js 15 and React 19 for a responsive and user-friendly experience.</li>
</ol>

<br>

<h2 id="problem-statement">🎯 Problem Statement</h2>
<p>The proliferation of Bangla news portals presents a challenge in navigating so many articles within a limited time, compounded by the language's inherent complexity.</p>
<ul>
    <li>📈 Overwhelming volume of Bengali news content online</li>
    <li>⏳ Limited time for comprehensive reading</li>
    <li>🔤 Inherent complexity of the Bengali language</li>
    <li>🧠 Difficulty in quickly grasping essential information from articles</li>
</ul>

<br>

<h2 id="features">✨ Features</h2>
<ul>
    <li>📝 Input Bengali news articles</li>
    <li>🤖 Generate concise summaries</li>
    <li>📊 Responsive design for various devices</li>
    <li>🌓 Dark mode support</li>
</ul>

<br>

<h2 id="model-architecture">🧠 Model Architecture</h2>
<p>Our summarization model is based on the Seq2Seq architecture using the pre-trained <code>google/mt5-small</code> model and MT5Tokenizer.</p>

<br>

<h3 id="dataset-statistics">📊 Dataset Statistics</h3>
<table>
    <thead>
        <tr>
            <th>Set</th>
            <th>Metric</th>
            <th>Text (token count)</th>
            <th>Summary (token count)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="4">Training</td>
            <td>Mean length</td>
            <td>1576.52</td>
            <td>61.15</td>
        </tr>
        <tr>
            <td>Max length</td>
            <td>9645</td>
            <td>316</td>
        </tr>
        <tr>
            <td>Min length</td>
            <td>23</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Std length</td>
            <td>943.45</td>
            <td>25.43</td>
        </tr>
        <tr>
            <td rowspan="4">Validation</td>
            <td>Mean length</td>
            <td>1266.48</td>
            <td>56.78</td>
        </tr>
        <tr>
            <td>Max length</td>
            <td>2559</td>
            <td>105</td>
        </tr>
        <tr>
            <td>Min length</td>
            <td>153</td>
            <td>22</td>
        </tr>
        <tr>
            <td>Std length</td>
            <td>540.35</td>
            <td>17.93</td>
        </tr>
        <tr>
            <td rowspan="4">Test</td>
            <td>Mean length</td>
            <td>1302.62</td>
            <td>57.51</td>
        </tr>
        <tr>
            <td>Max length</td>
            <td>2548</td>
            <td>105</td>
        </tr>
        <tr>
            <td>Min length</td>
            <td>182</td>
            <td>21</td>
        </tr>
        <tr>
            <td>Std length</td>
            <td>542.46</td>
            <td>17.75</td>
        </tr>
    </tbody>
</table>

<br>

<h3 id="model-code-snippet">💻 Model Code Snippet</h3>
<pre>
<code>
import torch
from transformers import MT5ForConditionalGeneration, MT5Tokenizer

model_name = "google/mt5-small"
tokenizer = MT5Tokenizer.from_pretrained(model_name)
model = MT5ForConditionalGeneration.from_pretrained(model_name)

# Tokenize the datasets
train_inputs = tokenize_data(df_4_train, max_length=512, max_target_length=100)
val_inputs = tokenize_data(df_4_val, max_length=512, max_target_length=100)
test_inputs = tokenize_data(df_4_test, max_length=512, max_target_length=100)

# Training arguments
training_args = Seq2SeqTrainingArguments(
    output_dir="./results",
    eval_strategy="epoch",
    learning_rate=1e-5,
    per_device_train_batch_size=8,
    per_device_eval_batch_size=8,
    num_train_epochs=5,
    weight_decay=0.01,
    save_total_limit=2,
    predict_with_generate=True,
    save_safetensors=False
)
</code>
</pre>

<br>

<h3 id="training-results">📈 Training Results</h3>
<table>
    <thead>
        <tr>
            <th>Epoch</th>
            <th>Training Loss</th>
            <th>Validation Loss</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>1.046200</td>
            <td>0.692979</td>
        </tr>
        <tr>
            <td>2</td>
            <td>1.015400</td>
            <td>0.683604</td>
        </tr>
        <tr>
            <td>3</td>
            <td>1.027700</td>
            <td>0.676918</td>
        </tr>
        <tr>
            <td>4</td>
            <td>0.988000</td>
            <td>0.672858</td>
        </tr>
        <tr>
            <td>5</td>
            <td>0.994400</td>
            <td>0.671896</td>
        </tr>
    </tbody>
</table>

<br>

<h2 id="tech-stack">🛠 Tech Stack</h2>

<h3 id="model-tech-stack">Model Tech Stack</h3>
<p>
    <img src="https://img.shields.io/badge/Python-3.9-blue?style=flat-square&logo=python&logoColor=white" alt="Python" />
    <img src="https://img.shields.io/badge/PyTorch-1.10-ee4c2c?style=flat-square&logo=pytorch&logoColor=white" alt="PyTorch" />
    <img src="https://img.shields.io/badge/NumPy-1.21-013243?style=flat-square&logo=numpy&logoColor=white" alt="NumPy" />
    <img src="https://img.shields.io/badge/Pandas-1.3-150458?style=flat-square&logo=pandas&logoColor=white" alt="Pandas" />
    <img src="https://img.shields.io/badge/Hugging%20Face-4.12-yellow?style=flat-square&logo=huggingface&logoColor=white" alt="Hugging Face" />
</p>

<h3 id="website-tech-stack">Website Tech Stack</h3>
<p>
    <img src="https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.0-007ACC?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/Node.js-20.11-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/NPM-10.9-CB3837?style=flat-square&logo=npm&logoColor=white" alt="NPM" />
    <img src="https://img.shields.io/badge/ESLint-8.0-4B32C3?style=flat-square&logo=eslint&logoColor=white" alt="ESLint" />
</p>

<br>

<h2 id="project-structure">📁 Project Structure</h2>
<pre>
<code>
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── fonts/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── NavigationBar.tsx
│   │   ├── page-contents/
│   │   │   ├── AdditionalContents/
│   │   │   └── SummaryGenerator/
│   │   └── ui/ (shadcn/ui components)
│   ├── context/
│   │   └── ThemeContext.ts
│   ├── hooks/
│   │   └── use-mobile.tsx
│   └── lib/
│       └── utils.ts
└── package.json
</code>
</pre>

<br>

<h2 id="installation">🚀 Installation</h2>
<ol>
    <li>Clone the repository:</li>
    <pre><code>git clone https://github.com/your-username/bengali-text-summarizer.git</code></pre>
    <li>Navigate to the project directory:</li>
    <pre><code>cd bengali-text-summarizer</code></pre>
    <li>Install dependencies:</li>
    <pre><code>npm install</code></pre>
    <li>Start the development server:</li>
    <pre><code>npm run dev</code></pre>
</ol>

<br>

<h2 id="usage">🖥 Usage</h2>
<ol>
    <li>Open your browser and navigate to <code>http://localhost:3000</code></li>
    <li>Input a Bengali news article in the provided text area</li>
    <li>Click the "Summarize" button</li>
    <li>View the generated summary</li>
</ol>


<h2 id="license">📄 License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
