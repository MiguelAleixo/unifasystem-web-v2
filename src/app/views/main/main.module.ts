import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';
import { UserService } from '../../core/utils/user/user.service';
import { ProfessorModule } from './professor/professor.module';
import { StorageService } from '../../core/utils/storage.service';
import { AlunoModule } from './aluno/aluno.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { CursoModule } from './curso/curso.module';

@NgModule({
    imports: [
        SharedModule,
        HomeModule,
        ProfessorModule,
        AlunoModule,
        DisciplinaModule,
        CursoModule
    ],
    exports: [],
    declarations: [MainComponent],
    providers: [UserService, StorageService],
})
export class MainModule {
}
