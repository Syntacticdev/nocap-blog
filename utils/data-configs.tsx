export type PostType = {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    publishedAt: string;
    thumbnail: {
        fileName: string;
        url: string;
    };
    content: {
        raw: any;
    };
    comments: {
        id: string;
        name: string;
        message: string;
        publishedAt: string;
    }[];
    category: {
        name: string;
    };
};


export type CommentType = {
    id: string;
    name: string;
    message: string;
}