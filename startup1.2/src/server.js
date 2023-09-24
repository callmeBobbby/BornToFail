import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    try {
        // Create a new user
        /*
            const user = await prisma.user.create({
                data: {
                    name: 'Bobby',
                    email: 'bobby@prisma.com',
                    address: {
                        street: '123 Main St',
                        city: 'City 1',
                        state: 'State 1',
                        zip: '12345',
                    },
                },
            });
    
            console.log(user);
            // Create a new post associated with the user
            const post = await prisma.post.create({
                data: {
                    slug: 'my-new-post2',
                    title: 'This is second Post',
                    body: 'This is the content of my new second post.',
                    authorId: user.id,
                },
            });
            console.log('Created post:', post);
    
            const comment = await prisma.comment.create({
                data: {
                    comment: 'this is a decent comment',
                    postId: post.id
                },
            });
    
            console.log('Comment created:', comment);
    */
        const productsData = [
            {
                id: "1",
                name: "Onions",
                description: "Description of product 1",
                price: 10.99,
                images: [
                    {
                        url: "https://www.freepngimg.com/thumb/onion/10-red-onion-png-image-thumb.png",
                    },
                ],
            },
            {
                id: "2",
                name: "Potato",
                description: "Description of product 2",
                price: 19.99,
                images: [
                    {
                        url: "https://www.freepngimg.com/thumb/potato/7-potato-png-images-pictures-download-thumb.png",
                    },
                ],
            },
        ];

        for (const productData of productsData) {
            const product = await prisma.product.create({
                data: {
                    id: productData.id,
                    name: productData.name,
                    description: productData.description,
                    price: productData.price,
                    images: {
                        create: productData.images,
                    },
                },
            });

            console.log("Product created:", product);
        }
    } catch (error) {
        console.error("Error:", error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
