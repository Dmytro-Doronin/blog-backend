"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMapper = exports.blogMapper = void 0;
const blogMapper = (blog) => {
    return {
        id: blog._id.toString(),
        name: blog.name,
        description: blog.description,
        websiteUrl: blog.websiteUrl,
        createdAt: blog.createdAt,
        isMembership: blog.isMembership
    };
};
exports.blogMapper = blogMapper;
const postMapper = (post) => {
    return {
        id: post._id.toString(),
        title: post.title,
        shortDescription: post.shortDescription,
        content: post.content,
        blogId: post.blogId,
        blogName: post.blogName,
        createdAt: post.createdAt
    };
};
exports.postMapper = postMapper;