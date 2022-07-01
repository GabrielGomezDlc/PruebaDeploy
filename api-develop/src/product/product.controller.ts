import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
  @Post('/create')
  createPost(@Res() res, @Body() createProductDto: CreateProductDto) {
    console.log(createProductDto);
    res.status(HttpStatus.OK).json({ message: 'received' });
  }
}
