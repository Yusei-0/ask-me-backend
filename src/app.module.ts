import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './modulos/usuarios/usuarios.module';
import { RespuestasModule } from './modulos/respuestas/respuestas.module';
import { PreguntasModule } from './modulos/preguntas/preguntas.module';
import { AsignaturasModule } from './modulos/asignaturas/asignaturas.module';

@Module({
  imports: [UsuariosModule, RespuestasModule, PreguntasModule, AsignaturasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
