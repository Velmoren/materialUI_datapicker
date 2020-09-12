import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

function App() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        style={{ marginLeft: 100, marginTop: 100 }}
        disableFuture
        maxDate={new Date()}
        openTo="year"
        format="dd/MM/yyyy"
        label="Дата рождения"
        helperText="Невозможен ввод даты из будущего"
        views={["year", "month", "date"]}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  );
}

export default App;
