<script>
import { Bar } from "vue-chartjs";

export default {
  data() {
    return {
      chartData: JSON.parse(localStorage.getItem("summery"))
    };
  },
  extends: Bar,
  mounted() {

    console.log(this.chartData);
    this.renderChart(
      {
        labels: ["cs", "cv", "cm", "ci", "ccp", "ccs"],
        datasets: [
          {
            label: "Complexity Summery",
            backgroundColor: "#198AD1",
            data: [this.chartData.AllByColCs,this.chartData.AllByColCv,this.chartData.AllByColCm,this.chartData.AllByColCi,this.chartData.AllByColCcp,this.chartData.AllByColCcs]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
