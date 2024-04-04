import { getRandomColor } from './getRandomColor';
import style from "./statistics.module.css";

function Statistics({ title, stats }) {
    return (
        <>
        <section className={style.statistics}>
    <h2 className={style.title}>{ title}</h2>
    <ul className={style.statList}>
                    {stats.map(({id, label, percentage}) =>
                    <>
                            <li className={style.item}
                                key={id}
                                style={{ backgroundColor: getRandomColor() }} >
                <span className={style.label}>{label }</span>
                        <span className={style.percentage}>{percentage}%</span>
                        </li>
                        </>)}
                      </ul>
</section>
    </>)
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Statistics