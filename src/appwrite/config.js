

//  Database_Services.js


//  Database  Services aa file ma define kareli chee


import conf from "../conf/conf";

import { Client,ID,Databases,Storage } from "appwrite";
import { Query } from "appwrite";

export class Service{
    client =new Client()
    database;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)    //  ex: file upload karvi hoy an mate Storage Class no use thay
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.database.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("createPost :: Error",error)
        }
    }

    async updatePost(slug,{title,content,featuredImage,status,userId}){
        try {
            return await this.database.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("updatePost :: Error ",error)
            return false
        }
    }
    
    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("deletePost :: Error",error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(){
        try {
            return await this.database.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                // [Query.equal("status", "active")]
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }
    
    

    // File Upload Services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("delete File :: Error",error)
            return false
        }
    }

    

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )
    }

}
const service =new Service();

export default service