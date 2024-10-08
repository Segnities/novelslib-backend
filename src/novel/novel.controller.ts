import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
  ParseArrayPipe,
} from '@nestjs/common';
import { NovelService } from './novel.service';
import {
  Novel,
  NovelFormat,
  NovelStatus,
  NovelTranslationStatus,
  Prisma,
} from '@prisma/client';

@Controller('novels')
export class NovelController {
  constructor(private readonly novelService: NovelService) { }

  @Get(':id')
  async findOneById(@Param('id', ParseIntPipe) id: number): Promise<Novel> {
    return this.novelService.findOneById(id);
  }

  @Get()
  async findAll(@Query() args: Prisma.NovelFindManyArgs): Promise<Novel[]> {
    return this.novelService.findAll(args);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createOne(@Body() data: Prisma.NovelCreateInput): Promise<Novel> {
    console.log(data);
    return this.novelService.createOne(data);
  }

  @Post('many')
  @HttpCode(HttpStatus.CREATED)
  async createMany(
    @Body() data: Prisma.NovelCreateManyInput[],
  ): Promise<Novel[]> {
    return this.novelService.createMany(data);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.NovelUpdateInput,
  ): Promise<Novel> {
    return this.novelService.updateOne(id, data);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteOne(@Param('id', ParseIntPipe) id: number): Promise<Novel> {
    return this.novelService.deleteOne(id);
  }
  @Get('author/:authorId')
  @HttpCode(HttpStatus.OK)
  async findByAuthor(
    @Param('authorId', ParseIntPipe) authorId: number,
  ): Promise<Novel[]> {
    return this.novelService.findByAuthor(authorId);
  }

  @Get('status/:status')
  @HttpCode(HttpStatus.OK)
  async findByStatus(@Param('status') status: NovelStatus): Promise<Novel[]> {
    return this.novelService.findByStatus(status);
  }

  @Get('format/:format')
  async findByFormat(@Param('format') format: NovelFormat): Promise<Novel[]> {
    return this.novelService.findByFormat(format);
  }

  @Get('translation-status/:status')
  @HttpCode(HttpStatus.OK)
  async findByTranslationStatus(
    @Param('status') status: NovelTranslationStatus,
  ): Promise<Novel[]> {
    return this.novelService.findByTranslationStatus(status);
  }

  @Get('tag/:tagId')
  @HttpCode(HttpStatus.OK)
  async findByTag(
    @Param('tagId', ParseIntPipe) tagId: number,
  ): Promise<Novel[]> {
    return this.novelService.findByTag(tagId);
  }

  @Get('tags')
  @HttpCode(HttpStatus.OK)
  async findByTags(
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    tagIds: number[],
  ): Promise<Novel[]> {
    return this.novelService.findByTags(tagIds);
  }

  @Get('genre/:genreId')
  @HttpCode(HttpStatus.OK)
  async findByGenre(
    @Param('genreId', ParseIntPipe) genreId: number,
  ): Promise<Novel[]> {
    return this.novelService.findByGenre(genreId);
  }

  @Get('genres')
  @HttpCode(HttpStatus.OK)
  async findByGenres(
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    genreIds: number[],
  ): Promise<Novel[]> {
    return this.novelService.findByGenres(genreIds);
  }

  @Get('country/:countryId')
  @HttpCode(HttpStatus.OK)
  async findByCountry(
    @Param('countryId', ParseIntPipe) countryId: number,
  ): Promise<Novel[]> {
    return this.novelService.findByCountry(countryId);
  }

  @Get('countries')
  @HttpCode(HttpStatus.OK)
  async findByCountries(
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    countryIds: number[],
  ): Promise<Novel[]> {
    return this.novelService.findByCountries(countryIds);
  }

  @Get('top-rated')
  @HttpCode(HttpStatus.OK)
  async getTopRatedNovels(
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<Novel[]> {
    return this.novelService.getTopRatedNovels(limit);
  }

  @Get('most-viewed')
  @HttpCode(HttpStatus.OK)
  async getMostViewedNovels(
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<Novel[]> {
    return this.novelService.getMostViewedNovels(limit);
  }

  @Get('recently-updated')
  @HttpCode(HttpStatus.OK)
  async getRecentlyUpdatedNovels(
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<Novel[]> {
    return this.novelService.getRecentlyUpdatedNovels(limit);
  }

  @Get('search')
  @HttpCode(HttpStatus.OK)
  async searchNovels(@Query('term') searchTerm: string): Promise<Novel[]> {
    return this.novelService.searchNovels(searchTerm);
  }

  @Get(':id/chapters')
  @HttpCode(HttpStatus.OK)
  async getNovelWithChapters(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Novel & { chapters: any[] }> {
    return this.novelService.getNovelWithChapters(id);
  }

  @Put(':id/views')
  @HttpCode(HttpStatus.OK)
  async updateNovelViews(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Novel> {
    return this.novelService.updateNovelViews(id);
  }

  @Get(':id/stats')
  @HttpCode(HttpStatus.OK)
  async getNovelStats(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.novelService.getNovelStats(id);
  }

  @Get(':id/related')
  @HttpCode(HttpStatus.OK)
  async getRelatedNovels(
    @Param('id', ParseIntPipe) id: number,
    @Query('limit', ParseIntPipe) limit: number = 5,
  ): Promise<Novel[]> {
    return this.novelService.getRelatedNovels(id, limit);
  }

  @Get('release-year/:year')
  @HttpCode(HttpStatus.OK)
  async getNovelsByReleaseYear(
    @Param('year', ParseIntPipe) year: number,
  ): Promise<Novel[]> {
    return this.novelService.getNovelsByReleaseYear(year);
  }

  @Get('adult')
  @HttpCode(HttpStatus.OK)
  async getAdultNovels(): Promise<Novel[]> {
    return this.novelService.getAdultNovels();
  }

  @Get('non-adult')
  @HttpCode(HttpStatus.OK)
  async getNonAdultNovels(): Promise<Novel[]> {
    return this.novelService.getNonAdultNovels();
  }

  @Get('author-name/:name')
  @HttpCode(HttpStatus.OK)
  async getNovelsByAuthorName(@Param('name') name: string): Promise<Novel[]> {
    return this.novelService.getNovelsByAuthorName(name);
  }

  @Get('alternative-title/:title')
  async getNovelsByAlternativeTitle(
    @Param('title') title: string,
  ): Promise<Novel[]> {
    return this.novelService.getNovelsByAlternativeTitle(title);
  }
}
