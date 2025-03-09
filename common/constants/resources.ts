export type Resource = {
  id: number;
  title: string;
  list_url: string|any;
  color: string;
};

export const RESOURCES: Resource[] = [
  {
    id: 1,
    title: "Films",
    list_url: "/lists?type=films",
    color: "#74B3CE",
  },
  {
    id: 2,
    title: "People",
    list_url: "/lists?type=people",
    color: "#508991",
  },
  {
    id: 3,
    title: "Species",
    list_url: "/lists?type=species",
    color: "#8A89C0",
  },
  {
    id: 4,
    title: "Locations",
    list_url: "/lists?type=locations",
    color: "#CDA2AB",
  },
  {
    id: 5,
    title: "Vehicles",
    list_url: "/lists?type=vehicles",
    color: "#09BC8A",
  },
];
