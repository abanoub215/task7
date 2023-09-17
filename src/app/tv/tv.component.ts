import { Component, OnInit } from '@angular/core';
import { TvsService } from '../tvs.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
})
export class TvComponent implements OnInit {
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  allTvs: any[] = []
  allData: any[] = [];
  lang: string = 'en-US';
  totaltvs!: number;
  tvsPerPage: number = 20;

  private searchval: string = '';
  showTvDetails: boolean = true;
  currentPage: number = 1;

  constructor(private tvService: TvsService) {}

  set searchValue(value: string) {
    this.searchval = value;
    this.searchallTvs(value);
  }
  ngOnInit(): void {
    this.tvService.getAllTvs(this.currentPage, this.lang).subscribe({
      next: (response) => {
        console.log(response);
        this.allTvs = response.results;
        this.allData = this.allTvs;
        this.totaltvs = response.total_results;
      },
    });

  }

  toggleDetails(tvId: number) {
    console.log(tvId);
    
    for (const item of this.allTvs) {
      if (item.id == tvId) {
        item.toggleDiscription = !item.toggleDiscription;
      }
    }
  }
  searchallTvs(tvTitle: string) {
    this.tvService.searchAllTv(tvTitle).subscribe({
      next: (response) => {
        this.allTvs = response.results;
        this.allData = this.allTvs;
      },
    });
  }
  changeLanguage() {
    this.lang = this.lang === 'en-US' ? 'ar-SA' : 'en-US';
    this.tvService.getAllTvs(this.currentPage, this.lang).subscribe({
      next: (response) => {
        this.allTvs = response.results;
        this.allData = this.allTvs;
      },
    });
  }
  changePage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.tvService.getAllTvs(this.currentPage, this.lang).subscribe({
      next: (response) => {
        this.allTvs = response.results;
        this.allData = this.allTvs;
      },
    });
    
  }
}
