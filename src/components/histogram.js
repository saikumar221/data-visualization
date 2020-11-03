import {Bar} from 'react-chartjs-2';

function histogram(props) {
    return (
        <div>
             <Bar
              data={{
                labels: props.labels,
                datasets: [
                  {
                    label: 'Orders',
                    backgroundColor: 'rgba(0,0,250)',
                    data: props.data,
                  }
                ]
              }}
              height={200}
              options={{
                scales: {
                  yAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'Orders Count'
                    }
                  }],
                  xAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'Days'
                    },
                    barThickness: 10
                  }],
                },
                legend: {
                  display: false,
                }
              }}
            />
        </div>
    );

}

export default histogram