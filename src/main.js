import Home from "./pages/Home";
import Register from "./pages/Register";
import "./style.css";
import Navigo from "navigo";
import render from "./utils/render";
import afterRegister from "./features/afterRegister";
import Login from "./pages/Login";
import afterLogin from "./features/afterLogin";
import NotFound from "./pages/NotFound";
import Task from "./pages/Task";
import afterTask from "./features/afterTask";

const app = document.querySelector("#app");
const router = new Navigo("/", { linksSelector: "a" });

// const render = (target, content) => {
//     target.innerHTML = content();
// };

router
    .on({
        "/": () => render(Home),
        "/register": () => render(Register, null, afterRegister),
        "/login": () => render(Login, null, afterLogin),
        "/task": () => render(Task, null, afterTask),
    })
    .notFound(() => render(NotFound));

router.resolve();

export default router;
