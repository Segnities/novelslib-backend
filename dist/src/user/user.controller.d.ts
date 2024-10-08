import { UserService } from './user.service';
import { User, Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/CreateUserDto';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signup(createUserDto: CreateUserDto): Promise<UserRecord>;
    createUser(createUserDto: Prisma.UserCreateInput): Promise<User>;
    getUserById(id: number): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
    updateUser(id: number, updateUserDto: Prisma.UserUpdateInput): Promise<User>;
    deleteUser(id: number): Promise<User>;
    getUserReviews(userId: number): Promise<({
        novel: {
            id: number;
            createdAt: Date;
            authorId: number;
            img: string;
            title: string;
            original_title: string | null;
            description: string;
            slug: string | null;
            likes: number;
            dislikes: number;
            isAdult: boolean;
            releaseYear: number | null;
            coverImg: string | null;
            updatedAt: Date;
            views: number;
            status: import(".prisma/client").$Enums.NovelStatus;
            translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
            format: import(".prisma/client").$Enums.NovelFormat;
            countryId: number;
            commendableTypeId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        userId: number;
        title: string;
        likes: number;
        updatedAt: Date;
        views: number;
        commendableTypeId: number;
        novelId: number;
        body: string;
    })[]>;
    getUserBookmarks(userId: number): Promise<({
        chapter: {
            novel: {
                id: number;
                createdAt: Date;
                authorId: number;
                img: string;
                title: string;
                original_title: string | null;
                description: string;
                slug: string | null;
                likes: number;
                dislikes: number;
                isAdult: boolean;
                releaseYear: number | null;
                coverImg: string | null;
                updatedAt: Date;
                views: number;
                status: import(".prisma/client").$Enums.NovelStatus;
                translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
                format: import(".prisma/client").$Enums.NovelFormat;
                countryId: number;
                commendableTypeId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            title: string;
            slug: string;
            likes: number;
            updatedAt: Date;
            views: number;
            commendableTypeId: number;
            novelId: number;
            content: string;
            chapterNumber: number;
        };
    } & {
        id: number;
        userId: number;
        chapterId: number;
    })[]>;
    getUserNotifications(userId: number): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        authorId: number | null;
        img: string;
        title: string;
        updatedAt: Date;
        message: string;
        relatedEntityType: import(".prisma/client").$Enums.NotificationRelatedEntity;
        relatedEntityId: number;
        notificationStatus: import(".prisma/client").$Enums.NotificationMessageStatus;
        metadata: Prisma.JsonValue | null;
        typeId: number;
        novelId: number | null;
        commentId: number | null;
        reviewId: number | null;
        notificationGroupId: number | null;
    }[]>;
    getUserComments(userId: number): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        likes: number;
        dislikes: number;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.CommentStatus;
        commendableTypeId: number;
        body: string;
        nestedLevel: number | null;
        complaintTypeId: number;
        replyToId: number | null;
    }[]>;
    getUserNews(userId: number): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        title: string;
        likes: number;
        updatedAt: Date;
        views: number;
        commendableTypeId: number;
        body: string;
        published: boolean;
    }[]>;
    getUserNovelSubscriptions(userId: number): Promise<{
        id: number;
        createdAt: Date;
        authorId: number;
        img: string;
        title: string;
        original_title: string | null;
        description: string;
        slug: string | null;
        likes: number;
        dislikes: number;
        isAdult: boolean;
        releaseYear: number | null;
        coverImg: string | null;
        updatedAt: Date;
        views: number;
        status: import(".prisma/client").$Enums.NovelStatus;
        translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
        format: import(".prisma/client").$Enums.NovelFormat;
        countryId: number;
        commendableTypeId: number;
    }[]>;
    getUserAuthorSubscriptions(userId: number): Promise<{
        name: string;
        id: number;
        img: string;
    }[]>;
    getUserPermissions(userId: number): Promise<{
        role: {
            permissions: {
                name: string;
                id: number;
                description: string | null;
                roleId: number;
            }[];
        } & {
            name: string;
            id: number;
            description: string | null;
        };
    }>;
    getUserNovelRatings(userId: number): Promise<({
        novel: {
            id: number;
            title: string;
            likes: number;
            dislikes: number;
        };
    } & {
        id: number;
        createdAt: Date;
        userId: number;
        updatedAt: Date;
        novelId: number;
        isLiked: boolean;
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
