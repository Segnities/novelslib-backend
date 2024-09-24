import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma, News, Novel, UserRating, ContinueReading, Comment } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(data: Prisma.UserCreateInput): Promise<User>;
    getUserById(id: number): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
    updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User>;
    deleteUser(id: number): Promise<User>;
    getUserReviews(userId: number): Promise<({
        novel: {
            id: number;
            title: string;
            original_title: string | null;
            description: string;
            img: string;
            isAdult: boolean;
            releaseYear: number | null;
            coverImg: string | null;
            createdAt: Date;
            updatedAt: Date;
            views: number;
            countryId: number;
            status: import(".prisma/client").$Enums.NovelStatus;
            authorId: number;
            translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
            format: import(".prisma/client").$Enums.NovelFormat;
            commendableTypeId: number;
        };
    } & {
        id: number;
        title: string;
        body: string;
        createdAt: Date;
        updatedAt: Date;
        likes: number;
        views: number;
        userId: number;
        novelId: number;
        commendableTypeId: number;
    })[]>;
    getUserBookmarks(userId: number): Promise<({
        chapter: {
            novel: {
                id: number;
                title: string;
                original_title: string | null;
                description: string;
                img: string;
                isAdult: boolean;
                releaseYear: number | null;
                coverImg: string | null;
                createdAt: Date;
                updatedAt: Date;
                views: number;
                countryId: number;
                status: import(".prisma/client").$Enums.NovelStatus;
                authorId: number;
                translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
                format: import(".prisma/client").$Enums.NovelFormat;
                commendableTypeId: number;
            };
        } & {
            id: number;
            title: string;
            content: string;
            likes: number;
            createdAt: Date;
            updatedAt: Date;
            novelId: number;
            commendableTypeId: number;
        };
    } & {
        id: number;
        userId: number;
        chapterId: number;
    })[]>;
    getUserNotifications(userId: number): Promise<{
        id: number;
        title: string;
        message: string;
        img: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        typeId: number;
        relatedEntityType: import(".prisma/client").$Enums.NotificationRelatedEntity;
        relatedEntityId: number;
        notificationStatus: import(".prisma/client").$Enums.NotificationMessageStatus;
        novelId: number | null;
        commentId: number | null;
        reviewId: number | null;
        authorId: number | null;
        metadata: Prisma.JsonValue | null;
        notificationGroupId: number | null;
    }[]>;
    getUserComments(userId: number): Promise<Comment[]>;
    getUserNews(userId: number): Promise<News[]>;
    getUserNovelSubscriptions(userId: number): Promise<Novel[]>;
    getUserAuthorSubscriptions(userId: number): Promise<{
        id: number;
        name: string;
        img: string;
    }[]>;
    updateUserRole(userId: number, roleId: number): Promise<User>;
    getUserRatings(userId: number): Promise<UserRating[]>;
    getContinueReadingList(userId: number): Promise<ContinueReading[]>;
    getUserTeam(userId: number): Promise<{
        team: {
            id: number;
            name: string;
            chapters_count: number;
            books_count: number;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    getUserPermissions(userId: number): Promise<{
        role: {
            permissions: {
                id: number;
                name: string;
                description: string | null;
                roleId: number;
            }[];
        } & {
            id: number;
            name: string;
            description: string | null;
        };
    }>;
    getUserNovelRatings(userId: number): Promise<({
        novel: {
            novelRating: {
                id: number;
                votesCount: number;
                avgRating: number;
                totalRating: number;
                novelId: number;
            };
            id: number;
            title: string;
        };
    } & {
        id: number;
        rating: number;
        createdAt: Date;
        updatedAt: Date;
        novelId: number;
        userId: number;
    })[]>;
    getUserCreatedContent(userId: number): Promise<{
        novels: number;
        reviews: number;
        comments: number;
        news: number;
    }>;
    getUserActivityStats(userId: number): Promise<{
        bookmarksCount: number;
        ratingsCount: number;
        reviewsCount: number;
        commentsCount: number;
    }>;
}
