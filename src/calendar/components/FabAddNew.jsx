import { addHours } from 'date-fns';
import {useCalendarStore, useUiStore} from '../../hooks'

export const FabAddNew = () => {

    const {openDateModal} = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handleClickNew = () => {

        setActiveEvent({
            title: 'Hello',
            notes: 'jeje',
            start: new Date(),
            end: addHours(new Date(), 2),
            bgColor: '#fafafa',
            user:{
                id: '123',
                name: 'Marlon'
            }
        })

        openDateModal();
    }

    return (
        <button 
            className="btn btn-primary fab" 
            onClick={handleClickNew}
        >
            <i className="fas fa-plus"></i>
        </button>
    )
  }