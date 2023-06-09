import create from "zustand";

import { devtools, persist } from "zustand/middleware";

const useNumberStore = (set) => ({
	count: 0,
	increase: () => set((state) => ({ count: state.count + 1 })),
	decrease: () => set((state) => ({ count: state.count - 1 })),
	setCount: (count) => set(() => ({ count: count })),
});

export default create(
	devtools(persist(useNumberStore, { name: "count-store" }))
);
