import React from 'react';
import * as lodash from 'lodash';
import './DataGrid.css';
import { HasId, ColumnConfig, SortDirection } from '../common';

interface DataGridProps<T extends HasId> {
  columns: ColumnConfig[];
  rows: T[];
  idField: keyof T;
  selectHeader: (field: string) => void;
  selectRow: (row: T) => void;
}

function DataGrid<T extends HasId>({
  columns,
  rows,
  idField = 'id',
  selectHeader,
  selectRow,
}: DataGridProps<T>) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              className="clickable"
              key={column.field}
              onClick={() => selectHeader(column.field)}
            >
              {column.label}{' '}
              <SortIndicator sortDirection={column.sortDirection} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <tr key={row[idField]} onClick={() => selectRow(row)}>
              {columns.map((column) => (
                <td key={column.field}>{lodash.get(row, column.field)}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

interface SortIndicatorProps {
  sortDirection: SortDirection;
}

const SortIndicator = ({ sortDirection }: SortIndicatorProps) => {
  let sortIndicator = '';
  if (sortDirection === 'asc') {
    sortIndicator = '⏫';
  } else if (sortDirection === 'desc') {
    sortIndicator = '⏬';
  }

  return <span>{sortIndicator}</span>;
};

export default DataGrid;
