import { activities } from "./db.ts";

export async function getStockTotals(warehouse_id: string): Promise<Response> {
  throw Error();
}

export async function getStockTotal(raw_item_id: string): Promise<Response> {
  throw Error();
}

export async function getStockHistories(
  raw_item_id: string,
): Promise<Response> {
  throw Error();
}

export async function getSourceWarehouseStock(
  warehouse_id: string,
): Promise<Response> {
  throw Error();
}

export async function getDestinationWarehouseStock() {
  throw Error();
}

export async function getStockActivities(
  activity_id: string,
): Promise<Response> {
  throw Error();
}

export async function getStockActivitiesRange(
  start: string,
  end: string,
): Promise<Response> {
  throw Error();
}

export async function getSupplierDetail(
  supplier_id: string,
): Promise<Response> {
  throw Error();
}

export async function getPurchasing(po_code: string): Promise<Response> {
  throw Error();
}

export async function getWarehouseActivities(
  warehouse_id: string,
): Promise<Response> {
  throw Error();
}

export async function getActivityDetail(
  activity_id: string,
): Promise<Response> {
  try {
    const data = await activities.aggregate([
      { $match: { _id: activity_id } },
      {
        $lookup: {
          from: "stocks",
          localField: "_id",
          foreignField: "activity_id",
          as: "related_stocks",
        },
      },
    ]);

    if (!data) {
      return new Response(JSON.stringify({ error: "Data not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
