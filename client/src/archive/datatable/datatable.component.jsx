import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import './datatable.styles.css'
import { InputText } from 'primereact/inputtext';

const generateFakeData = (count) => {
  const projects = [];
  const projectTypes = ["BAU Activity", "Sales Activity"];

  for (let i = 0; i < count; i++) {
    const projectType = projectTypes[Math.floor(Math.random() * projectTypes.length)];

    projects.push({
      ProjectType: projectType,
      ProjectName: `Project ${i + 1}`,
      Task: `Task ${i + 1}`,
      Comment: `Comment ${i + 1}`,
      Mon: Math.floor(Math.random() * 10),
      Tue: Math.floor(Math.random() * 10),
      Wed: Math.floor(Math.random() * 10),
      Thu: Math.floor(Math.random() * 10),
      Fri: Math.floor(Math.random() * 10),
      Sat: Math.floor(Math.random() * 10),
      Sun: Math.floor(Math.random() * 10),
      Total: Math.floor(Math.random() * 50),
    });
  }

  return projects;
};

const ProjectDataTable = () =>  {
  const projects = generateFakeData(10);

  const projectNameOptions = [
    { label: 'Project A', value: 'Project A' },
    { label: 'Project B', value: 'Project B' },
    // Add more options as needed
  ];

  const taskOptions = [
    { label: 'Task 1', value: 'Task 1' },
    { label: 'Task 2', value: 'Task 2' },
    // Add more options as needed
  ];

  const rowGroupHeaderTemplate = (rowData, rowGroup) => {
    return (
      <tr>
        <td colSpan="12" style={{ background: '#007ad9', color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
          {rowGroup}
        </td>
      </tr>
    );
  };

  const commentTemplate = (rowData) => {
    return <InputText className='p-comment' />
  }

  const projectNameTemplate = (props) => (
    <Dropdown
      {...props}
      options={[
        { label: 'BAU Activity', value: 'BAU' },
        { label: 'Sales Activity', value: 'Sales' },
      ]}
    />
  )

  const taskTemplate = (props) => {
    return (
        <>      
            <Dropdown
      {...props}
      options={[
        { label: 'Task 1', value: 'BAU Task' },
        { label: 'Task 2', value: 'Sales Task' },
      ]}
    />
        </>
    )
  }

  const sevenDay = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
  const sevenDayTemplate = () => {
        const templates = sevenDay.map((day) => {
            return (
                (rowData) => {
                    return (
                        <InputText/>
                    )
                }
            )
        }) 
        return templates 
  }

  const mondayTemplate = (props) => <InputText type="text" className="small-input"/>
  const tuesdayTemplate = (props) => <InputText type="text" className="small-input"/>
  const wednesdayTemplate = (props) => <InputText type="text" className="small-input"/>
  const thrusdayTemplate = (props) => <InputText type="text" className="small-input"/>
  const fridayTemplate = (props) => <InputText type="text" className="small-input"/>
  const saturdayTemplate = (props) => <InputText type="text" className="small-input"/>
  const sundayTemplate = (props) => <InputText type="text" className="small-input"/>

  return (
    <DataTable
      value={projects}
      rowGroupMode="rowspan"
      groupRowsBy="ProjectType"
      sortMode="single"
      sortField="ProjectType"
      sortOrder={1}
      tableStyle={{ minWidth: '50rem' }}
      rowGroupHeaderTemplate={rowGroupHeaderTemplate}
    >
      <Column header="Project Type" field="ProjectType" />
      <Column header="Project Name" field="ProjectName" body={projectNameTemplate} />
      <Column header="Task" field="Task" body={taskTemplate} />
      <Column header="Comment" field="Comment" body={commentTemplate} />
      <Column header="Mon" field="Mon" body={mondayTemplate} />
      <Column header="Tue" field="Tue" body={tuesdayTemplate}  />
      <Column header="Wed" field="Wed" body={wednesdayTemplate}  />
      <Column header="Thu" field="Thu" body={thrusdayTemplate}  />
      <Column header="Fri" field="Fri" body={fridayTemplate}  />
      <Column header="Sat" field="Sat" body={saturdayTemplate}  />
      <Column header="Sun" field="Sun" body={sundayTemplate}  />
      <Column header="Total" field="Total" />
    </DataTable>
  );
};

export default ProjectDataTable;
