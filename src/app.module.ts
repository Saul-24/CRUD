import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { PrismaModule } from './prisma/prisma.module';
import { VentasModule } from './ventas/ventas.module';

@Module({
  imports: [ProductosModule, PrismaModule, VentasModule],

})
export class AppModule {}
