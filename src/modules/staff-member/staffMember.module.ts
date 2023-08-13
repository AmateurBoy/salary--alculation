import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffMember } from './staffMember.entity';
import { StaffMemberController } from './staffMember.controlle';
import { StaffMemberService } from './staffMember.service';

@Module({
  imports: [TypeOrmModule.forFeature([StaffMember])],
  controllers: [StaffMemberController],
  providers: [StaffMemberService],
  exports: [StaffMemberService],
})
export class StaffMemberModule {}
