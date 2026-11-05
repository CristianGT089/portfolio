/**
 * Todo el contenido del portafolio vive aquí. Para cambiar el cargo en Vigía Nova (p. ej. a «CTO»)
 * basta con editar `CURRENT_ROLE`.
 */

export const CURRENT_ROLE = 'Head of Technology';
export const CURRENT_COMPANY = 'Vigía Nova';

export const PROFILE = {
	name: 'Cristian Guzmán',
	fullName: 'Cristian Stiven Guzmán Tovar',
	location: 'Bogotá, Colombia',
	timezone: 'America/Bogota',
	email: 'cristiansgt089@gmail.com',
	languages: 'Spanish (native) · English (B2)',
	linkedin: 'https://www.linkedin.com/in/cristian-stiven-guzman-tovar-668655217/',
	github: 'https://github.com/CristianGT089',
};

export const VIGIA_NOVA = {
	name: 'Vigía Nova',
	legalName: 'Vigía Nova Consultores',
	url: 'https://vigianova.com',
	role: CURRENT_ROLE,
	roleNote: 'Founding engineer',
	period: 'Jun 2026 — Present',
	summary:
		'A multi-tenant SaaS that gives Colombian SMEs real control of their accounting, finances and tax deadlines — trial balances, financial statements, sector comparison and the tax calendar in one place.',
	highlight:
		'I joined as the first engineer and own the technology end to end: architecture, product engineering, infrastructure, security and releases — working directly with the founding partners on what gets built and why.',
	stats: [
		{ value: '470+', label: 'commits across API and app' },
		{ value: '960+', label: 'automated backend tests' },
		{ value: '18', label: 'backend domain modules' },
		{ value: 'QA · PROD', label: 'auto-deployed on every merge' },
	],
	work: [
		{
			title: 'Accounting core',
			body: 'Trial-balance ingestion, general ledger, balance sheet and income statement over the Colombian chart of accounts (PUC), isolated per company.',
		},
		{
			title: 'Alegra integration',
			body: "Rebuilds a company's books from the Alegra API — journals, bills and payments — and keeps the account catalog in sync.",
		},
		{
			title: 'AI assistant on Claude',
			body: "Tool-calling over the company's own figures, streamed over SSE, able to draw charts, with AI quotas per plan.",
		},
		{
			title: 'Sector benchmarking',
			body: 'ETL over Supersociedades open data to compare a company’s margins and ratios against its industry.',
		},
		{
			title: 'Taxes, roles and plans',
			body: 'Tax obligations and deadline calendar, per-company custom roles and permissions, plan ceilings and rate limits.',
		},
		{
			title: 'Platform and delivery',
			body: 'Docker, Nginx and PostgreSQL on a VPS; GitHub Actions to QA and production; backups, health checks, plus the marketing site and an internal sales CRM.',
		},
	],
	architecture: [
		{ label: 'Site', tech: 'Astro' },
		{ label: 'App', tech: 'Next.js · TypeScript' },
		{ label: 'API', tech: 'FastAPI · SQLAlchemy' },
		{ label: 'Data', tech: 'PostgreSQL 16' },
	],
	integrations: ['Alegra API', 'Supersociedades open data', 'Anthropic Claude'],
};

export const EXPERIENCE = [
	{
		period: 'Jun 2026 — Now',
		role: CURRENT_ROLE,
		company: 'Vigía Nova Consultores',
		href: '#now',
		description:
			'Leading technology for the company’s accounting and tax-control platform, from the first commit to production.',
		tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'Claude API', 'CI/CD'],
	},
	{
		period: 'Apr 2025 — May 2026',
		role: 'Backend Developer',
		company: 'Evaluar.com',
		description:
			'Backend services for an enterprise talent-assessment SaaS used across Ecuador, Colombia, Chile, Peru and Mexico. Built AI workflow automation with LangGraph to orchestrate LLM-based agents inside business processes, following clean-architecture principles.',
		tags: ['Python', 'LangGraph', 'LLMs', 'Clean architecture'],
	},
	{
		period: 'Aug 2023 — Sep 2024',
		role: 'Scripting Jr Executive',
		company: 'Kantar Millward Brown',
		description:
			'Scripted surveys for data collection and analysis, and automated the processes around them to speed up insight delivery.',
		tags: ['Scripting', 'Automation', 'Data collection'],
	},
	{
		period: 'Jan 2023 — Aug 2023',
		role: 'Full-stack Developer',
		company: 'Freelance',
		description:
			'Music-management web app on the Spotify API: FastAPI backend with authentication, Angular frontend, deployed with Docker on a VPS.',
		tags: ['FastAPI', 'Angular', 'Docker'],
	},
];

export const AWARDS = [
	{
		rank: '1st in Bogotá · Top 3 nationally',
		title: 'Hackathon Colombia 5.0',
		organizers: 'MinTIC · Corferias · APPS.CO',
		date: 'May 2026',
		description:
			"Colombia's largest government-backed hackathon. Our team from the GNU/Linux group (GLUD) built a working prototype in 48 hours and placed first in Bogotá, top three in the country.",
		image: '/img/hackathon.webp',
	},
	{
		rank: 'Outstanding Student',
		title: 'Universidad Distrital Francisco José de Caldas',
		organizers: 'Academic work group',
		date: '2024',
		description:
			'Recognized for contributions to collaborative projects and leadership within the university community.',
		image: null,
	},
];

export const COMMUNITY = [
	{
		period: 'Jan 2025 — Now',
		role: 'Director',
		org: 'GNU/Linux Group · Universidad Distrital',
		description:
			'Leading a 200+ member open-source community and coordinating 30+ collaborators. Started a mentoring program that has reached 50+ students.',
	},
	{
		period: 'Jun 2025 — Now',
		role: 'Software Architecture Volunteer',
		org: 'Colmena DAO',
		description:
			'Deploying free-software infrastructure for beekeepers in Colombia, Peru, Ecuador and Bolivia, including a blockchain-based traceability platform — a digital honey passport.',
	},
	{
		period: 'Apr — May 2025',
		role: 'Organizer',
		org: 'FLISoL Bogotá',
		description:
			'Co-organized the city’s largest free-software event: 600+ attendees, 27 talks with international speakers, 40% more student participation than the year before.',
	},
	{
		period: 'Jan 2024 — Jan 2025',
		role: 'Teaching Branch Leader',
		org: 'GNU/Linux Group · Universidad Distrital',
		description:
			'Designed a free-software curriculum and trained 50+ students in GNU/Linux, Bash and Docker; led 10+ developers building an interactive learning platform.',
	},
];

export const EDUCATION = [
	{
		period: '2019 — 2026',
		title: 'B.Sc. Systems Engineering',
		school: 'Universidad Distrital Francisco José de Caldas',
	},
	{
		period: '2017 — 2018',
		title: 'Systems Technician',
		school: 'SENA — National Learning Service',
	},
];

export const TOOLBOX = [
	{ group: 'Backend', items: ['Python', 'FastAPI', 'SQLAlchemy', 'Java', 'Spring Boot'] },
	{ group: 'Frontend', items: ['TypeScript', 'Next.js', 'React', 'Astro', 'Tailwind'] },
	{ group: 'Data & AI', items: ['PostgreSQL', 'LangGraph', 'Claude API', 'ETL'] },
	{ group: 'Ops', items: ['Linux', 'Docker', 'Nginx', 'GitHub Actions'] },
];
