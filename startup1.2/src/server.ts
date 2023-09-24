import {PrismaClient} from '@prisma/client/edge'

const prisma = new PrismaClient();

async function main(){

    const post = await prisma.post.create({
        data:{
            title : 'My fist post',
            body : 'My first body'
        }
    })

    console.log(post);
}

main();