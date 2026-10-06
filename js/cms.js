/**
 * Headless CMS client — mock data by default.
 * Public interface mirrors a typical headless CMS SDK.
 */
window.CMS = (function () {
    const cfg = window.LOGINEWS_CONFIG;

    const CATEGORIES = [
        { slug: 'freight', name: 'Freight', description: 'Road, rail, sea and air freight news.' },
        { slug: 'warehousing', name: 'Warehousing', description: 'Storage, fulfilment and inventory.' },
        { slug: 'last-mile', name: 'Last mile', description: 'Delivery to the doorstep.' },
        { slug: 'sustainability', name: 'Sustainability', description: 'Greener logistics.' },
        { slug: 'technology', name: 'Technology', description: 'Telematics, AI and automation.' },
    ];

    const POSTS = [
        {
            id: '1',
            slug: 'national-fleet-expands-electric-trucks',
            title: 'National fleet expands with 200 new electric trucks',
            excerpt: 'The first batch of electric heavy-duty trucks has joined our long-haul fleet, cutting diesel use on the north corridor by 30%.',
            body: `
        <p>The National Logistics Company has taken delivery of the first 50 of 200 electric heavy-duty trucks, marking the largest single deployment of electric freight vehicles in the country.</p>
        <h2>Why it matters</h2>
        <p>Heavy road freight accounts for a significant share of transport emissions. Switching the north corridor to electric power is expected to cut diesel consumption by roughly 30% in the first year.</p>
        <blockquote>"This is the beginning of a fleet-wide transition," said our Chief Operating Officer.</blockquote>
        <h2>What's next</h2>
        <ul>
          <li>Depot charging infrastructure at 12 sites</li>
          <li>Driver training programme starting next month</li>
          <li>Partnership with a renewable energy provider</li>
        </ul>
        <p>The remaining 150 vehicles will arrive over the next 18 months.</p>
      `,
            category: 'sustainability',
            author: 'Ayesha Khan',
            date: '2025-09-12',
            readingTime: 4,
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
            featured: true,
        },
        {
            id: '2',
            slug: 'cold-chain-warehouse-opens-south',
            title: 'New cold-chain warehouse opens in the south',
            excerpt: 'A 40,000 sqm facility with 12 temperature zones will serve pharmaceutical and fresh-food customers.',
            body: `
        <p>Our new southern cold-chain hub opened this week, bringing 12 independently controlled temperature zones online.</p>
        <h2>Designed for pharma</h2>
        <p>The facility meets GDP and WHO standards for pharmaceutical storage and includes redundant power and monitoring systems.</p>
        <h2>Customer benefits</h2>
        <ul>
          <li>Single-handling from port to shelf</li>
          <li>Real-time temperature telemetry</li>
          <li>Cross-docking for fresh food</li>
        </ul>
      `,
            category: 'warehousing',
            author: 'Daniel Osei',
            date: '2025-09-05',
            readingTime: 3,
            image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80',
            featured: true,
        },
        {
            id: '3',
            slug: 'last-mile-app-relaunch',
            title: 'Last-mile app relaunches with live driver tracking',
            excerpt: 'Customers can now see their driver on a map, get accurate ETAs, and reschedule in one tap.',
            body: `
        <p>The LogiNews last-mile app has been rebuilt from the ground up with live tracking at its core.</p>
        <h2>What's new</h2>
        <ul>
          <li>Live driver location on a map</li>
          <li>Accurate ETAs based on traffic</li>
          <li>One-tap rescheduling</li>
          <li>Proof-of-delivery photos</li>
        </ul>
        <p>The app is available on iOS and Android.</p>
      `,
            category: 'last-mile',
            author: 'Maria Lopez',
            date: '2025-08-28',
            readingTime: 3,
            image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80',
            featured: false,
        },
        {
            id: '4',
            slug: 'ai-route-optimisation',
            title: 'AI route optimisation cuts fuel use by 12%',
            excerpt: 'Our new routing engine learns from millions of trips to find faster, greener paths.',
            body: `
        <p>A year-long pilot of our AI routing engine has delivered a 12% reduction in fuel consumption across the test fleet.</p>
        <h2>How it works</h2>
        <p>The engine combines traffic, weather, and historical delivery data to recommend optimal routes in real time.</p>
        <h2>Results</h2>
        <ul>
          <li>12% less fuel</li>
          <li>8% faster deliveries</li>
          <li>15% fewer late arrivals</li>
        </ul>
      `,
            category: 'technology',
            author: 'Ayesha Khan',
            date: '2025-08-20',
            readingTime: 5,
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
            featured: false,
        },
        {
            id: '5',
            slug: 'freight-rates-stabilise',
            title: 'Freight rates stabilise after a volatile year',
            excerpt: 'Spot rates on major corridors are returning to pre-2020 levels, bringing relief to shippers.',
            body: `
        <p>After two years of sharp swings, freight rates on our major corridors have begun to stabilise.</p>
        <h2>What changed</h2>
        <p>New capacity, softer demand, and improved scheduling have all contributed to the correction.</p>
        <h2>What it means for shippers</h2>
        <p>Longer-term contracts are back in vogue as both sides seek predictability.</p>
      `,
            category: 'freight',
            author: 'Daniel Osei',
            date: '2025-08-10',
            readingTime: 4,
            image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80',
            featured: false,
        },
        {
            id: '6',
            slug: 'solar-warehouse-roofs',
            title: 'Solar panels installed on 8 warehouse roofs',
            excerpt: 'On-site generation now covers 40% of daytime electricity needs at our largest sites.',
            body: `
        <p>Eight of our largest warehouses are now partially powered by on-site solar generation.</p>
        <h2>Impact</h2>
        <ul>
          <li>40% of daytime electricity from solar</li>
          <li>~2,400 tonnes CO₂ avoided per year</li>
          <li>Payback period under 6 years</li>
        </ul>
      `,
            category: 'sustainability',
            author: 'Maria Lopez',
            date: '2025-07-30',
            readingTime: 3,
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
            featured: false,
        },
        {
            id: '7',
            slug: 'driver-academy-graduates',
            title: 'Driver academy graduates 120 new drivers',
            excerpt: 'Our in-house academy is tackling the national driver shortage head-on.',
            body: `
        <p>The LogiNews Driver Academy has graduated its largest cohort yet — 120 new professional drivers.</p>
        <h2>About the programme</h2>
        <p>Twelve weeks of classroom and on-road training, with a guaranteed job on completion.</p>
      `,
            category: 'freight',
            author: 'Ayesha Khan',
            date: '2025-07-15',
            readingTime: 3,
            image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80',
            featured: false,
        },
        {
            id: '8',
            slug: 'robotics-in-warehousing',
            title: 'Robotics pilot begins in central warehouse',
            excerpt: 'Autonomous mobile robots are now moving pallets in our busiest facility.',
            body: `
        <p>Twenty autonomous mobile robots (AMRs) have started work in our central warehouse.</p>
        <h2>What they do</h2>
        <p>The AMRs move pallets between picking stations, reducing walking distance for staff.</p>
      `,
            category: 'warehousing',
            author: 'Daniel Osei',
            date: '2025-07-01',
            readingTime: 4,
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80',
            featured: false,
        },
        {
            id: '9',
            slug: 'same-day-delivery-expands',
            title: 'Same-day delivery expands to 12 new cities',
            excerpt: 'Our same-day network now covers 30 cities nationwide.',
            body: `
        <p>Same-day delivery is now available in 12 new cities, bringing the total to 30.</p>
        <h2>How it works</h2>
        <p>Orders placed before 11am are delivered the same evening.</p>
      `,
            category: 'last-mile',
            author: 'Maria Lopez',
            date: '2025-06-20',
            readingTime: 2,
            image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=1200&q=80',
            featured: false,
        },
    ];

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function getPosts() {
        if (!cfg.USE_MOCK) return fetchFromRealCMS('/articles');
        await delay(150);
        return POSTS.slice();
    }

    async function getPostBySlug(slug) {
        if (!cfg.USE_MOCK) return fetchFromRealCMS(`/articles?slug=${encodeURIComponent(slug)}`);
        await delay(100);
        return POSTS.find((p) => p.slug === slug) || null;
    }

    async function getCategories() {
        if (!cfg.USE_MOCK) return fetchFromRealCMS('/categories');
        await delay(50);
        return CATEGORIES.slice();
    }

    async function getCategoryBySlug(slug) {
        const cats = await getCategories();
        return cats.find((c) => c.slug === slug) || null;
    }

    function getPostsByCategory(slug) {
        if (!slug || slug === 'all') return POSTS.slice();
        return POSTS.filter((p) => p.category === slug);
    }

    function getFeaturedPosts(limit = 2) {
        return POSTS.filter((p) => p.featured).slice(0, limit);
    }

    function getRelatedPosts(post, limit = 3) {
        if (!post) return [];
        return POSTS.filter((p) => p.category === post.category && p.id !== post.id).slice(0, limit);
    }

    function getCategoryName(slug) {
        const c = CATEGORIES.find((x) => x.slug === slug);
        return c ? c.name : slug;
    }

    async function fetchFromRealCMS(path) {
        // Real CMS fetch (Contentful, Strapi, etc.) goes here.
        const url = cfg.CMS.endpoint + path;
        const res = await fetch(url, {
            headers: cfg.CMS.token ? { Authorization: `Bearer ${cfg.CMS.token}` } : {},
        });
        if (!res.ok) throw new Error(`CMS request failed: ${res.status}`);
        return res.json();
    }

    return {
        getPosts,
        getPostBySlug,
        getCategories,
        getCategoryBySlug,
        getPostsByCategory,
        getFeaturedPosts,
        getRelatedPosts,
        getCategoryName,
    };
})();