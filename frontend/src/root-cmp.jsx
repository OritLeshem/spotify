import React from 'react'
import { Routes, Route } from 'react-router'
import { AppFooter } from './cmps/app-footer'
import { HomePage } from './pages/home-page'
import { AppHeader } from './cmps/app-header'
import { EntityIndex } from './pages/entity-index'
import { EntitySearch } from './pages/entity-search'
import { EntityDetails } from './pages/entity-details'
import Navbar from './cmps/navbar'

export function RootCmp() {
    return <section className="app main-layout">
        <AppHeader />
        <Navbar />
        <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/entity" element={<EntityIndex />} />
            <Route path="/search" element={<EntitySearch />} />

            <Route element={<EntityDetails />} path="/entity/:entityId" />
        </Routes>
        <AppFooter />
    </section>
}


