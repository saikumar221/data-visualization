import {Line} from 'react-chartjs-2';

function lineGraph(props) {
    return (
        <div>
            <Line
          data={{
            labels: props.labels,
           datasets: [
             {
               label: 'Total Price',
               fill: false,
               lineTension: 0,
               backgroundColor: 'blue',
               borderColor: 'blue',
               borderWidth: 2,
               data: props.data
             }
           ]
         }}
          options={{
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Total Price'
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
            legend:{
              display:false,
            }
          }}
          height={200}
        />
        </div>
    );

}

export default lineGraph