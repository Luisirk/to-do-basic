
import { FILTERS_BUTTONS } from "../const"
import { type FilterValue } from "../types"

interface Props{
    onFilterChange:(filter: FilterValue) => void
    filterSelected: FilterValue
}
export const Filters: React.FC<Props> = (
    { filterSelected, onFilterChange } // Cambiado de filtersSelected a filterSelected
) => {    
    return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                    const isSelected = key === filterSelected
                    const className = isSelected ? 'selected' : ''  

                    return (
                        <li key={key}>
                            <a
                                className={className}
                                href={href}
                                onClick={(event) => {
                                    event.preventDefault()
                                    onFilterChange(key as FilterValue)
                                }}
                            >
                                {literal}
                            </a>
                            
                        </li>
                    )
                })
            }
        </ul>
    )
}
