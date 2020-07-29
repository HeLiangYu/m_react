export default function logger({ getState }) {
  return (next) => (action) => {
    console.log(action);
    const pre = getState();
    console.log("pre", pre);

    const current = next(action);

    const now = getState();
    console.log("now", now);

    console.log("-----------------");
    console.log(current);
    return current;
  };
}
