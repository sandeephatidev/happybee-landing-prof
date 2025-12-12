export default function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "HappyBee",
        "url": "https://happybee.in",
        "logo": "https://happybee.in/happybee-logo.png",
        "description": "Premium group-buy platform for health-conscious professionals. High-performance nutrition sourced by nutritionists.",
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "availableLanguage": ["English"]
        },
        "sameAs": [
            // Add your social media URLs here when available
            // "https://www.facebook.com/happybee",
            // "https://www.instagram.com/happybee",
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "HappyBee",
        "url": "https://happybee.in",
        "description": "Join the exclusive community for better health at better prices.",
        "publisher": {
            "@type": "Organization",
            "name": "HappyBee",
            "logo": {
                "@type": "ImageObject",
                "url": "https://happybee.in/happybee-logo.png"
            }
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
        </>
    );
}
