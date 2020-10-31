let o = {
  id: 1,
  info: {
    arr: [1, 2, 3],
    subs: [
      {
        id: 1,
        name: "subs",
        info: undefined, // 直接pass
      },
    ],
  },
};

console.log(JSON.stringify(o, ["id"])); // {"id":1}
console.log(
  JSON.stringify(o, (k, v) => {
    if (k === "id") {
      return 2;
    } else {
      return v;
    }
  })
);

console.log(JSON.stringify(o, null, 2));
console.log(JSON.stringify(o, null, "---"));
