import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardService } from '../../board.service';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss'],
})
export class TaskDialogComponent implements OnInit {
  labelOptions = ['purple', 'blue', 'green', 'yellow', 'red', 'gray'];

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    private boardService: BoardService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleTaskDelete() {
    this.boardService.removeTask(this.data.boardId, this.data.task);
    this.dialogRef.close();
  }
}
