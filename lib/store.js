import { create } from 'zustand'

export const useStore = create((set) => ({
    //loading state manage
    loading: false,
    setLoading: (loader) => set({ loading: loader }),

    //search state manage
    search: '',
    setsearch: (s) => set({ search: s }),


    // admin/post/add route state handle here 
    title: '',
    settitle: (t) => set({ title: t }),
    dis: '',
    setdis: (d) => set({ dis: d }),
    photo: '',
    setphoto: (p) => set({ photo: p }),
    date: '',
    setdate: (d) => set({ date: d }),
    category: '',
    setcategory: (c) => set({ category: c }),
    repoter: '',
    setrepoter: (r) => set({ repoter: r }),
    location: '',
    setlocation: (l) => set({ location: l }),


}))