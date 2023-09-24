import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    try {
        // Create a new user
        const user = await prisma.user.create({
            data: {
                name: 'Rich',
                email: 'hello@prisma.com',
            },
        });

       
        console.log(user);
        // Create a new post associated with the user
        const post = await prisma.post.create({
            data: {
                title: 'My new post',
                body: 'This is the content of my new post.',
                slug: 'my-new-post',
                authorId: user.id,
            },
        });

        console.log('Created post:', post);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
