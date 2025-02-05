
        const recyclingData = {
            "plastic bottle": {
                recyclable: true,
                instructions: "Rinse and remove cap. Place in recycling bin.",
                alternatives: ["Use a reusable water bottle", "Install a water filter at home"]
            },
            "cardboard box": {
                recyclable: true,
                instructions: "Flatten and remove any tape or labels. Place in recycling bin.",
                alternatives: ["Reuse for storage", "Use for composting"]
            },
            "glass jar": {
                recyclable: true,
                instructions: "Rinse and remove lid. Place in recycling bin.",
                alternatives: ["Reuse for storage", "Use for crafts or gardening"]
            },
            "aluminum can": {
                recyclable: true,
                instructions: "Rinse and place in recycling bin.",
                alternatives: ["Use reusable containers", "Buy products in larger quantities"]
            },
            "styrofoam": {
                recyclable: false,
                instructions: "Not recyclable in most areas. Check local facilities for special recycling programs.",
                alternatives: ["Use reusable or biodegradable containers", "Avoid purchasing products with styrofoam packaging"]
            }
        };

        document.getElementById('item-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const item = document.getElementById('item-input').value.toLowerCase();
            const resultDiv = document.getElementById('result');
            
            if (recyclingData[item]) {
                const data = recyclingData[item];
                resultDiv.innerHTML = `
                    <h3>${item}</h3>
                    <p><strong>Recyclable:</strong> ${data.recyclable ? 'Yes' : 'No'}</p>
                    <p><strong>Instructions:</strong> ${data.instructions}</p>
                    <p><strong>Alternatives:</strong></p>
                    <ul>
                        ${data.alternatives.map(alt => `<li>${alt}</li>`).join('')}
                    </ul>
                `;
            } else {
                resultDiv.innerHTML = `
                    <h3>${item}</h3>
                    <p>We don't have information about this item. Please check with your local recycling center.</p>
                    <p><strong>General Alternatives:</strong></p>
                    <ul>
                        <li>Consider reusing or upcycling if possible</li>
                        <li>Research eco-friendly alternatives</li>
                    </ul>
                `;
            }
        });
