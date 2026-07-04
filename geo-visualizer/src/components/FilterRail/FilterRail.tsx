import { useAppStore } from '../../store/useAppStore';
import { CATEGORIES } from '../../data/categories';
import { Category } from '../../types';
import './FilterRail.css';

export function FilterRail() {
  const activeCategories = useAppStore((s) => s.activeCategories);
  const toggleCategory = useAppStore((s) => s.toggleCategory);
  const setAllCategories = useAppStore((s) => s.setAllCategories);

  const allOn = activeCategories.size === CATEGORIES.length;
  const noneOn = activeCategories.size === 0;

  return (
    <div className="filter-rail" id="filter-rail">
      <div className="filter-rail__header">
        <h3 className="filter-rail__title">Layers</h3>
        <div className="filter-rail__quick">
          <button
            className={`filter-rail__quick-btn ${allOn ? 'filter-rail__quick-btn--active' : ''}`}
            onClick={() => setAllCategories(true)}
          >
            All
          </button>
          <button
            className={`filter-rail__quick-btn ${noneOn ? 'filter-rail__quick-btn--active' : ''}`}
            onClick={() => setAllCategories(false)}
          >
            None
          </button>
        </div>
      </div>

      <div className="filter-rail__list">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategories.has(cat.id as Category);
          return (
            <button
              key={cat.id}
              className={`filter-rail__item ${isActive ? 'filter-rail__item--active' : ''}`}
              onClick={() => toggleCategory(cat.id as Category)}
              id={`filter-${cat.id}`}
            >
              <span
                className="filter-rail__dot"
                style={{
                  backgroundColor: isActive ? cat.color : 'transparent',
                  borderColor: cat.color,
                }}
              />
              <span className="filter-rail__icon">{cat.icon}</span>
              <span className="filter-rail__label">{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
