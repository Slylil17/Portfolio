import { notFound } from "next/navigation";
import ProjectContent from "./ProjectContent";

const projectData: Record<string, any> = {
  spacex: {
    title: "SpaceX Launch Trends & Operational Analysis",
    subtitle: "Python Analysis | REST API",
    description: "Verifying global launch statistics by processing raw mission logs directly from the SpaceX API.",
    heroImage: "/images/spacex_launch.png",
    color: "indigo",
    tools: "Python, Pandas",
    viz: "Seaborn",
    complexity: "Data Joining",
    focus: "Integrity",
    layoutType: "star",
    situation: {
        label: "Situation",
        title: "The Challenge of Official Statistics",
        content: "While SpaceX provides summarized success rates, I wanted to build a system that verifies these numbers independently. The challenge was to pull multi-dimensional data from disparate API endpoints (Launches, Launchpads, and Rockets) and consolidate them into a single source of truth for auditing purposes."
    },
    task: {
        label: "Task",
        title: "Objective & Scope",
        content: "My objective was to automate the data extraction process and perform exploratory data analysis (EDA) to answer two key questions:",
        bullets: [
            "How has recovery technology improved mission success rates over time?",
            "Does a specific launchpad correlate with mission failure rates?"
        ]
    },
    action: {
        label: "Action",
        title: "The \"Audit\" Mindset in Data Joining",
        content: "Applying my Chartered Accountancy background, I approached the data joining process like a financial reconciliation. Instead of using the pre-calculated success columns in the Launchpad table, I performed an Inner Join between the raw mission logs and the infrastructure metadata.",
        subContent: "I utilized Seaborn for high-fidelity visualizations, focusing on 'failure gaps'—the visual distance between total attempts and successful outcomes. This allowed for an immediate visual audit of each launch site's operational efficiency."
    },
    images: [
        { 
            src: "/images/official_spacex_stats.png", 
            title: "Acutal Data From SPACEX", 
            subtitle: "Fig 2: Plotting calculated success rates provided by SPACEX API.",
            desc: "I compared the actual SPACEX data using the launchpads table.",
            detail: "This visualization shows the success rates as reported by the official API. My goal was to use this as a baseline for my independent verification process."
        },
        { 
            src: "/images/calculated_success_rate.png", 
            title: "Verification Logic", 
            subtitle: "Fig 1: Manually calculated success rates verified via raw launch logs.",
            desc: "I converted boolean success flags into binary (1/0) integers and calculated the mean across joined datasets to verify official reports.",
            detail: "By transforming raw data into binary flags, I could perform statistical operations that weren't possible with the original format. This confirmed the official stats were accurate."
        },
        { 
            src: "/images/fairings_recovery_attemps.png", 
            title: "Fairings Recovery Attempts", 
            subtitle: "Fig 3: Fairings recovery attempts.",
            desc: "Analyzing the attempts of fairing recovery and successes.",
            detail: "This plot tracks how often SpaceX attempts to recover fairings. It's a key metric for understanding their drive towards full rocket reusability."
        },
        { 
            src: "/images/fairings_recover_rate_over_time.png", 
            title: "Fairings Recovery Success trend", 
            subtitle: "Fig 4: Fairings recovery trend over the years.",
            desc: "Analyzing the Success Rate of Recovery Over the Years.",
            detail: "The upward trend here is undeniable. It proves that SpaceX's recovery technology has matured significantly, leading to higher success rates in recent missions."
        }
    ],
    results: {
        label: "Result",
        title: "Insights & Takeaways",
        items: [
            { title: "Infrastructure Growth", desc: "Verified that with the improvement in technology, successful launches have skyrocketed since 2020.", borderColor: "green" },
            { title: "Recovery Trends", desc: "Observed that with time, more money is invested in improving recovery systems to reduce the cost of launches by reusing fairings.", borderColor: "blue" }
        ],
        image: "/images/successful_launch_trends.png",
        imageCaption: "visualization of successful launch trend"
    },
    github: "https://github.com/Slylil17/SpaceX-Launch-Analysis",
    cta: {
        title: "Want to see the raw Python code?",
        desc: "The full Jupyter Notebook, including API extraction logic and Seaborn formatting, is available on my GitHub."
    }
  },
  retail: {
    title: "End-to-End Retail Analytics Dashboard",
    subtitle: "Power BI | SQL | Excel",
    description: "Developing a 360° business monitoring system from raw multi-table data to interactive executive reporting.",
    heroImage: "/images/retail_business.png",
    color: "blue",
    tools: "SQL, Power BI",
    viz: "DAX Measures",
    complexity: "Star Schema",
    focus: "Business Intel",
    layoutType: "legacy",
    snapshot: "/images/retail_dashboard.png",
    sections: [
        {
            label: "The Pipeline",
            title: "From Raw Tables to Relational Model",
            content: "Instead of using a pre-cleaned flat file, I simulated a complex retail environment by generating a 6-table relational dataset. The project spanned the entire data lifecycle: cleaning raw inputs, establishing primary/foreign key relationships in a Star Schema, and engineering DAX measures to calculate performance metrics."
        },
        {
            type: "split",
            left: {
                label: "Action: Backend",
                title: "SQL & Excel Architecture",
                content: "I utilized PostgreSQL to practice complex joins and CTEs, ensuring that the disparate tables (Customers, Products, Regions, and Sales) could be unified without losing data integrity.",
                bullets: [
                    "Applied Window Functions to rank top customers by total spend.",
                    "Validated data in Excel using conditional formatting to detect outliers."
                ]
            },
            right: {
                title: "DAX Financial Logic",
                italic: "\"Leveraging my financial background, I created custom DAX measures to translate raw sales data into business-ready KPIs. These measures allow for dynamic calculation regardless of filters applied.\"",
                code: [
                    "total_sales = SUM(orders[total_amount])",
                    "avg_order_val = DIVIDE([total_sales], COUNT(order_items[order_id]))",
                    "avg_profit = DIVIDE([total_profit], COUNT(order_items[order_id]))"
                ]
            }
        },
        {
            label: "Action: Frontend",
            title: "Advanced Visualization Techniques",
            features: [
                {
                    icon: "search",
                    title: "3-Level Hierarchy Drill",
                    desc: "Engineered a bar chart allowing users to drill down from Category to Specific Product, and finally to individual Order IDs, revealing granular performance at every level."
                },
                {
                    icon: "user",
                    title: "Customer Loyalty Analysis",
                    desc: "Developed a 'Days Since Join' tracking system using a calculated column to identify long-term customer trends.",
                    code: "days_since_join = DATEDIFF(customers[join_date], TODAY(), DAY)"
                }
            ]
        },
        {
            label: "Result",
            title: "Business Intelligence Impact",
            stats: [
                { val: "100%", label: "Data Reconciled", color: "blue" },
                { val: "6", label: "Unified Tables", color: "purple" },
                { val: "Star", label: "Schema Optimized", color: "pink" }
            ],
            footer: "\"This project demonstrates my ability to take raw, unorganized data and turn it into a strategic asset. By bridging SQL data manipulation with Power BI visualization, I've created a tool that answers both 'What happened?' and 'Why did it happen?'\""
        }
    ],
    github: "https://github.com/Slylil17/Retail-Analytics-Dashboard",
    cta: {
        title: "Interested in the SQL & Documentation?",
        desc: "The full SQL scripts and Power BI documentation are available on my GitHub."
    }
  },
  "crypto-pipeline": {
    title: "End-to-End Crypto Market Pipeline & Dashboard",
    subtitle: "Automated ETL Pipeline: Python | PostgreSQL | Power BI",
    description: "A self-sustaining data system that captures real-time crypto snapshots to analyze market cap distribution and supply-side inflation.",
    heroImage: "/images/crypto_project_main.jpg",
    color: "pink",
    tools: "Python, PostgreSQL",
    viz: "Power BI",
    complexity: "API Automation",
    focus: "Market Structure",
    layoutType: "crypto",
    sections: [
        {
            label: "The Problem & Logic",
            title: "The CA Brain: Why these metrics?",
            content: "Most people look at crypto prices. I wanted to look at Market Structure. By Comparing the Cirulating supply in the market to max supply possible in the market we can analyze the supply health of that coin along with its liquidity in the market. This also helps us make prediction as to how much time it will take to reach its max supply and how valued the coin is in current market.",
            subContent: "Merely showing currency age doesn't provide much insights, by adding the market cap condition to it, we can clearly see that the longer the coin is in the market, the more is its market share.",
            code: {
                title: "DAX: Currency Age",
                language: "dax",
                content: "currency_age = DATEDIFF('cmc_data latest_data'[date_added], TODAY(), YEAR)"
            },
            challenge: {
                title: "The Challenge: Hyper-inflationary Tokens",
                content: "There were two coins SHIB and PEPE which are highly popular meme coins. They have very high max supply due to which they were distorting the current supply and max supply visualization. Similarly, when I showed market cap by currency bar plot, BTC was distorting the whole plot as it has very high market cap.",
                solution: "To fix this, I used a log scale which doesn't compare the coins in actual values rather makes scales and compares the coins one to another on that scale. This fixed the graphs and other coins were also being able to be showed there instead of being suppressed by more dominating coins."
            }
        },
        {
            label: "The Architecture",
            title: "The Engineering: How it works",
            content: "I built a modular pipeline using Python and SQLAlchemy for extraction, PostgreSQL for storage, and Windows Task Scheduler for automation.",
            codeSnippets: [
                {
                    title: "SQLAlchemy Database Injection",
                    content: "db_url = 'postgresql://postgres:postgres@localhost:5432/postgres'\nengine = create_engine(db_url)\ndf.to_sql(\n      'crypto_data', con=engine, if_exists='append', index=False, schema= 'cmc_data'\n    )\nprint(\"Data Transfer Successful\")"
                },
                {
                    title: "Self-Reading Run Logger",
                    content: "def get_next_run_no(log_file):\n  if not os.path.exists(log_file):\n    return 1\n  try:\n    with open(log_file, 'r') as f:\n      last_line = f.readlines()[-1]\n      parts = last_line.split()\n      last_no = int(parts[1])\n      return last_no + 1\n  except Exception as e:\n    print(f'Error Returning Last Line, {e}')\n    return 1"
                }
            ],
            automation: "I used a simple bat script that activated my .venv and runs main.py and then deactivates itself. I automated its running with task scheduler so that it runs automatically every hour my pc is on."
        },
        {
            label: "The Database Layer",
            title: "The SQL Flex: Moving Logic to Backend",
            content: "Creating a VIEW for the Latest Data + (Capped vs Uncapped Coins). This proves I can move 'Business Logic' out of the UI and into the Database for better performance.",
            code: {
                title: "SQL VIEW Creation",
                language: "sql",
                content: "create or replace view latest_data as\nselect *,\n\tcase\n\t\twhen max_supply is null then 'Inflationary (No Cap)'\n\t\telse 'Deflationary (Capped)'\n\tend as coin_type\nfrom crypto_data\nwhere timestamp = (select max(timestamp) from crypto_data);"
            }
        }
    ],
    visuals: [
        {
            src: "/images/live_cmc_analysis_dashboard_1_all.png",
            title: "Market Dominance (Scatter Plot)",
            detail: "This scatter plot correlates Currency Age vs. Market Cap. The positive correlation suggests that longevity in the crypto market often builds trust and larger market share over time."
        },
        {
            src: "/images/live_cmc_analysis_dashboard_1_usdt.png",
            title: "Supply Health (Gauge)",
            detail: "This gauge visualization shows the ratio of circulating supply to max supply. I used a dynamic gauge message DAX which shows 'capped/uncapped asset' based on filters to handle the 'blank' issue for uncapped coins."
        },
        {
            src: "/images/live_cmc_analysis_dashboard_1_btc.png",
            title: "Top Gainers/Losers",
            detail: "A real-time snapshot of market movers. I filtered this for a rolling 24-hour window to capture short-term volatility trends."
        },
        {
            src: "/images/live_cmc_analysis_dashboard_1_zec.png",
            title: "Price Trends (ZEC Example)",
            detail: "Detailed price fluctuation tracking for Zcash (ZEC). This visual demonstrates how the asset oscillates between key support and resistance levels (approx. $240 - $260)."
        }
    ],
    github: "https://github.com/Slylil17/CoinMarketCap-API-Scraping-Analysis",
    cta: {
        title: "Want to see the raw Python code?",
        desc: "The full ETL logic, PostgreSQL schemas, and Power BI files are available on my GitHub."
    }
  }
};

export async function generateStaticParams() {
  return [
    { id: "spacex" },
    { id: "retail" },
    { id: "crypto-pipeline" }
  ];
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectData[id];

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}
