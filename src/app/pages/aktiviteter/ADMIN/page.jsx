'use client'

import Header from '@/layout/Header';
import { useState, useEffect } from "react";
import makeRequestData from "@/components/hooks/useRequestData"
import React from 'react';
import ReactDOM from 'react-dom';
import CRUDTable,
{
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm,
} from 'react-crud-table';

export default function aktiviteterADMIN() {

  const DescriptionRenderer = ({ field }) => <textarea {...field} />;

  let tasks = [
    {
      id: 1,
      title: 'Create an example',
      description: 'Create an example of how to use the component',
    },
    {
      id: 2,
      title: 'Improve',
      description: 'Improve the component!',
    },
  ];

  const SORTERS = {
    NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
    NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
    STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
    STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a)),
  };

  const getSorter = (data) => {
    const mapper = x => x[data.field];
    let sorter = SORTERS.STRING_ASCENDING(mapper);

    if (data.field === 'id') {
      sorter = data.direction === 'ascending' ?
        SORTERS.NUMBER_ASCENDING(mapper) : SORTERS.NUMBER_DESCENDING(mapper);
    } else {
      sorter = data.direction === 'ascending' ?
        SORTERS.STRING_ASCENDING(mapper) : SORTERS.STRING_DESCENDING(mapper);
    }

    return sorter;
  };

  let count = tasks.length;
  const service = {
    fetchItems: (payload) => {
      let result = Array.from(tasks);
      result = result.sort(getSorter(payload.sort));
      return Promise.resolve(result);
    },
    create: (task) => {
      count += 1;
      tasks.push({
        ...task,
        id: count,
      });
      return Promise.resolve(task);
    },
    update: (data) => {
      const task = tasks.find(t => t.id === data.id);
      task.title = data.title;
      task.description = data.description;
      return Promise.resolve(task);
    },
    delete: (data) => {
      const task = tasks.find(t => t.id === data.id);
      tasks = tasks.filter(t => t.id !== task.id);
      return Promise.resolve(task);
    },
  };

  const styles = {
    container: { margin: 'auto', width: 'fit-content' },
  };


  const { data: sommerlandData, makeRequest: sommerlandRequest } = makeRequestData()
  const { data: nordstrandData, makeRequest: nordstrandRequest } = makeRequestData()
  const { data: kattegatData, makeRequest: kattegatRequest } = makeRequestData()
  const { data: nationalparkData, makeRequest: nationalparkRequest } = makeRequestData()
  const { data: reeparkData, makeRequest: reeparkRequest } = makeRequestData()
  const { data: dyreparkData, makeRequest: dyreparkRequest } = makeRequestData()

  const [state, setState] = useState('')


  useEffect(() => {

    sommerlandRequest('https://gjerrildapi.onrender.com/sommerland', "GET")

  }, [])

  return (
    <>
      <Header />
      <h1>Admin Panel</h1>
      <div className='flex flex-col gap-2 p-5'>

        <select name="" id="">
          <option value="">Djurs Sommerland</option>
          <option value="">Gjerrild Nordstrand</option>
          <option value="">Kattegat Centret</option>
          <option value="">Nationalpark Mols Bjerge</option>
          <option value="">Skandinavisk Dyrepark</option>
          <option value="">Ree park Safari</option>
        </select>

        <select name="" id="">

          {sommerlandData &&
            sommerlandData.content.map((e, i) => (
              <option value="">ID: {e._id} | {e.title}</option>
            ))
          }
        </select>

        <input type="button" className='btn w-100 ' value="Submit" />

      </div>
    </>
  );
}
