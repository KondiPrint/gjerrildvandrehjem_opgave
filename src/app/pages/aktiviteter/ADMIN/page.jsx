'use client'

import Header from '@/layout/Header';
import { useState, useEffect } from "react";
import makeRequestData from "@/components/hooks/useRequestData"

export default function aktiviteterADMIN() {

  const { data: sommerlandData, makeRequest: sommerlandRequest } = makeRequestData()
  const { data: nordstrandData, makeRequest: nordstrandRequest } = makeRequestData()
  const { data: kattegatData, makeRequest: kattegatRequest } = makeRequestData()
  const { data: nationalparkData, makeRequest: nationalparkRequest } = makeRequestData()
  const { data: reeparkData, makeRequest: reeparkRequest } = makeRequestData()
  const { data: dyreparkData, makeRequest: dyreparkRequest } = makeRequestData()

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
            ))/*  */
          }
        </select>

        <input type="button" className='btn w-100 ' value="Submit" />

      </div>
    </>
  );
}
