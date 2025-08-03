import React, { useState } from 'react'

interface Supplier {
  name: string
}

interface Retailer {
  name: string
}

const Dropshipping = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([])
  const [retailers, setRetailers] = useState<Retailer[]>([])
  const [supplierName, setSupplierName] = useState('')
  const [retailerName, setRetailerName] = useState('')

  const addSupplier = (e: React.FormEvent) => {
    e.preventDefault()
    if (!supplierName.trim()) return
    setSuppliers([...suppliers, { name: supplierName }])
    setSupplierName('')
  }

  const addRetailer = (e: React.FormEvent) => {
    e.preventDefault()
    if (!retailerName.trim()) return
    setRetailers([...retailers, { name: retailerName }])
    setRetailerName('')
  }

  return (
    <div>
      <h1>Dropshipping Integration</h1>
      <section>
        <h2>Register Supplier</h2>
        <form onSubmit={addSupplier}>
          <input
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
            placeholder="Supplier name"
          />
          <button type="submit">Add Supplier</button>
        </form>
        <ul>
          {suppliers.map((s, index) => (
            <li key={index}>{s.name}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Register Retailer</h2>
        <form onSubmit={addRetailer}>
          <input
            value={retailerName}
            onChange={(e) => setRetailerName(e.target.value)}
            placeholder="Retailer name"
          />
          <button type="submit">Add Retailer</button>
        </form>
        <ul>
          {retailers.map((r, index) => (
            <li key={index}>{r.name}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Dropshipping
