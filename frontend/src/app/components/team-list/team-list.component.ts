import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})


export class TeamListComponent {
  teams;
  selectedTeam = {
    id: '',
    date: '',
    team_name: '',
    users: []
  };

  constructor(
    private teamService: TeamService,
  ) {
    this.getTeams();
  }

  getTeams() {
    this.teamService.getAllTeams().subscribe(
      data => {
        this.teams = data;
      },
      error => {
        console.log(error);
      }
    );
  };

  teamClicked(team) {
    this.teamService.getOneTeam(team.id).subscribe(
      data => {
        this.selectedTeam = data;
      },
      error => {
        console.log(error);
      }
    );
  };

  updateTeam() {
    this.teamService.updateTeam(this.selectedTeam).subscribe(
      data => {
        this.getTeams();
      },
      error => {
        console.log(error);
      }
    );
    this.clearSelectedTeam()
  }

  createTeam() {
    this.teamService.createTeam(this.selectedTeam).subscribe(
      data => {
        this.getTeams();
      },
      error => {
        console.log(error);
      }
    );
    this.clearSelectedTeam()
  }

  deleteTeam() {
    this.teamService.deleteTeam(this.selectedTeam).subscribe(
      data => {
        this.getTeams();
      },
      error => {
        console.log(error);
      }
    );
    this.clearSelectedTeam()
  }

  clearSelectedTeam() {
    this.selectedTeam = {
      id: '',
      date: '',
      team_name: '',
      users: []
    };
  }
}
