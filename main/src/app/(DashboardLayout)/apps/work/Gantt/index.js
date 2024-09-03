

import { MomentSvelteGanttDateAdapter, SvelteGantt, SvelteGanttDependencies, SvelteGanttTable } from 'svelte-gantt'
import moment from 'moment'
import { useEffect, useState } from 'react';


const Tree = () => {
    // Loading
    const [loaded, setLoaded] = useState(false)

    // Time
    function time(input) {
        return moment(input, 'HH:mm')
    }

    // Start & End
    const currentStart = time('06:00')
    const currentEnd = time('18:00')

    // Time ranges
    const timeRanges = [
        {
            id: 0,
            from: time('10:00'),
            to: time('12:00'),
            classes: null,
            label: 'Lunch',
            resizable: false
        },
        {
            id: 1,
            from: time('15:00'),
            to: time('17:00'),
            classes: null,
            label: 'Dinner'
        }
    ]


    // Datas to load
    const data = {
        rows: [
            {
                id: 10,
                label: "Accounting",
                class: 'row-group',
                iconClass: 'fas fa-calculator',
                children: [
                    {
                        id: 11,
                        label: "Petunia Mulliner"
                    }, {
                        id: 12,
                        label: "Mélina Giacovetti"
                    }, {
                        id: 13,
                        label: "Marlène Lasslett"
                    }, {
                        id: 14,
                        label: "Adda Youell"
                    }
                ]
            }, {
                id: 20,
                label: "Business Development",
                class: 'row-group',
                iconClass: 'fas fa-user-tie',
                children: [
                    {
                        id: 21,
                        label: "Pietra Fallow"
                    }, {
                        id: 22,
                        label: "Mariellen Torbard"
                    }, {
                        id: 23,
                        label: "Renate Humbee"
                    }
                ]
            }, {
                id: 3,
                label: "Ida Flewan"
            }, {
                id: 4,
                label: "Lauréna Shrigley"
            }, {
                id: 5,
                label: "Ange Kembry"
            }
        ],
        tasks: [
            {
                id: 1,
                resourceId: 11,
                label: "LPCVD",
                from: time("9:00"),
                to: time("11:00"),
                classes: "orange"
            }, {
                id: 2,
                resourceId: 12,
                label: "Entrepreneurship",
                from: time("10:00"),
                to: time("12:30"),
                classes: "orange"
            }
        ],
        dependencies: []
    }

    // Gantt options
    const options = {
        dateAdapter: new MomentSvelteGanttDateAdapter(moment),
        rows: data.rows,
        tasks: data.tasks,
        dependencies: data.dependencies,
        timeRanges,
        columnOffset: 15,
        magnetOffset: 15,
        rowHeight: 52,
        rowPadding: 6,
        headers: [{ unit: 'day', format: 'MMMM Do' }, { unit: 'hour', format: 'H:mm' }],
        fitWidth: true,
        minWidth: 800,
        from: currentStart,
        to: currentEnd,
        tableHeaders: [{ title: 'Label', property: 'label', width: 140, type: 'tree' }],
        tableWidth: 240,
        ganttTableModules: [SvelteGanttTable],
        ganttBodyModules: [SvelteGanttDependencies]
    }

    // useEffect to load Gantt
    useEffect(() => {
        if (!loaded) {
            // Create Gantt
            new SvelteGantt({ target: document.getElementById('example-gantt'), props: options })
            setLoaded(true)
        }
    }, [loaded])

    return (
        <>
            {/* GANTT CONTAINER */}
            <div id="example-gantt"></div>
        </>
    )
}


export default Tree;

