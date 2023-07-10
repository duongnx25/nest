import { Body, Controller, Get, Param, Post, Query, Redirect, Req } from "@nestjs/common";
import { CreateCatDto } from "../dtos/create_cat.dto";
import { CatService } from "../services/cat.service";

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get('')
  async findAll(@Req() request): Promise<Array<string>> {
    return this.catService.findAll();
  }

  @Get(':id')
  findOne(
    @Req() request,
    @Param('id') id,
  ): string {
    return 'cat';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Post('')
  create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }
}
